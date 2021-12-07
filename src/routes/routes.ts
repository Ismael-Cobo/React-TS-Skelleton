import { lazy, LazyExoticComponent } from 'react'
//import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyLoad/pages'
import { NoLazy } from '../01-lazyLoad/pages/NoLazy';


type JSXElement = () => JSX.Element

interface Route {
    path: string;
    to: string;
    Component: LazyExoticComponent<JSXElement> | JSXElement;
    name: string
}


const LazyLayout = lazy( () => import( /* webpackChunkName: "LazyLayout" */'../01-lazyLoad/layout/LazyLayout')) 

//const Lazy1 = lazy( () => import( /* webpackChunkName: "LazyPage1" */'../01-lazyLoad/pages/LazyPage1')) 
//const Lazy2 = lazy( () => import( /* webpackChunkName: "LazyPage2" */'../01-lazyLoad/pages/LazyPage2')) 
//const Lazy3 = lazy( () => import( /* webpackChunkName: "LazyPage3" */'../01-lazyLoad/pages/LazyPage3')) 

// El path y el to deben de tener el mismo nombre
export const routes: Route[] = [
    {
        path: '/lazyLayout/*',
        to: '/lazyLayout',
        Component: LazyLayout,
        name: 'LazyLayout - Dash'
    },
    {
        path: 'no-lazy',
        to: '/no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
]