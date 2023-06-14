import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    // если не использует тайпскрипт, то нужен babel-loader
    // (перегоняет новый стандарт js в старый, чтобы всеми браузерами поддерживались)
    const babelLoader = {
        test: /\.(js|ts|tsx|)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['en', 'ru'],
                            keyAsDefaultValue: true,
                        },
                    ],
                    // [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
                ],
            },
        },
    };

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = buildCssLoaders(isDev);

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };
    // woff2|woff // для работы с шрифтами
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [babelLoader, typeScriptLoader, cssLoader, svgLoader, fileLoader];
}
