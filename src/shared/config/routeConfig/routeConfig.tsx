import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { RouteProps } from "react-router-dom"

// енам списка роутов, которые есть в приложении и названия для них
export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}
// объект в котором для каждого маршрута из енама укажу путь до нужного компонента
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
}

// объявляю сами роуты, компонент который нужно отрисовывать
export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath[AppRoutes.MAIN],
    element: <MainPage/>
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath[AppRoutes.ABOUT],
    element: <AboutPage/>
  },
}
