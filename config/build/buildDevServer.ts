import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true, // будет автоматически открывать мне страницу в браузере с приложением
        historyApiFallback: true, // тк у нас SPA то эта настройка помогает проксировать мой index.html
        hot: true, // автоматическое обновление без перезагрузки страницы
    };
}
