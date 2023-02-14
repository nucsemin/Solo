import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  // если не использует тайпскрипт, то нужен babel-loader
  // (перегоняет новый стандарт js в старый, чтобы всеми браузерами поддерживались)
  const typeScriptLoader = {
    test: /\.tsx|jsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader, 
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: true,
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  return [typeScriptLoader, cssLoader];
}
