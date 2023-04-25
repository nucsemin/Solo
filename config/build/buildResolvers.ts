import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions) {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true, // абсолютные пути в приоритете
        modules: [options.paths.src, 'node_modules'], // путь до папки src. тк все пути находятся на уровне options
        mainFiles: ['index'], // для каждого модуля главным будет файл index
        alias: {},
    };
}
