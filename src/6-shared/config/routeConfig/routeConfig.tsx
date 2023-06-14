import { AboutPage } from '2-pages/AboutPage';
import { MainPage } from '2-pages/MainPage';
import { Map } from '2-pages/Map';
import { NotFoundPage } from '2-pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

// енам списка роутов, которые есть в приложении и названия для них
export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'notFound',
  MAP = 'map',
}
// объект в котором для каждого маршрута из енама укажу путь до нужного компонента
export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
    [AppRoutes.MAP]: '/map',
};

// объявляю сами роуты, компонент который нужно отрисовывать
export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
    [AppRoutes.MAP]: {
        path: RoutePath[AppRoutes.MAP],
        element: <Map />,
    },
};
