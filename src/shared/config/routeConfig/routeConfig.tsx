import { MainPage } from "../../../pages/MainPage"
import { RouteProps } from "react-router-dom"
import { AboutPage } from "../../../pages/AboutPage"


export enum AppRoutes {
	MAIN = 'main',
	ABOUt = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN] : '/',
	[AppRoutes.ABOUt]: '/about'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPage/>
	},
	[AppRoutes.ABOUt]: {
		path: RoutePath.about,
		element: <AboutPage/>
	}
}