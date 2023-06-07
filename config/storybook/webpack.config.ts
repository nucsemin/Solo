import path from 'path';
import webpack from 'webpack';
import { BuildPaths } from '../build/types/config'; // используем относительный путь поскольку абсолютные работают только в папке src

export default ({ config } : {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        entry: '',
        build: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');
    return config;
};
