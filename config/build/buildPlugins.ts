import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css', // какие названия будут у файлов и где они будут распологаться (аналогично тому что писали в output)
      chunkFilename: 'css/[name].[contenthash:8].css' // это когда мы будет разбивать файлы на асинхронные и у нас будут отдельные чанки, которые будут отдельно подгружаться
    }),
    new webpack.DefinePlugin({
     __IS_DEV__: JSON.stringify(isDev)
    })
  ];
}
