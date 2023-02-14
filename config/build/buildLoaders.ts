import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
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
      MiniCssExtractPlugin.loader, 
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  return [typeScriptLoader, cssLoader];
}
