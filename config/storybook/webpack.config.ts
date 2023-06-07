import path from 'path';
import webpack from 'webpack';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
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
    config.module?.rules?.push(buildCssLoaders(true)); // true птмчт storybook будет использоваться только на этапе разработкиё
    return config;
};
