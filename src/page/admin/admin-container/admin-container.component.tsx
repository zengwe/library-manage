import React, { Component, ComponentFactory, ComponentClass } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import { HomeComponent } from '../home/home.component';
import { PageContentComponent, IPageContentComponentProps, IRoute } from '../../../components/page-content.component/page-content.component';
const gradePath = '/admin/';
interface IRouteInfo extends  IRoute{
    component: ComponentClass
}
const routes: { [key: string]: IRouteInfo} = {
    home: {
        name: '首页',
        path: gradePath + 'home',
        component: HomeComponent
    }
}
export class AdminContainerComponent extends Component<any> {
    private createRouter() {
        let routeNodes = [];
        for(let routeName in routes) {
            routeNodes.push(
                <Route key="routeName" path={routes[routeName].path} component={ routes[routeName].component }></Route>
            );
        }
        return routeNodes;
    }
    render() {
        return (
            <div>
                <PageContentComponent routes={routes}>
                    <div className="header">
                        insert header works!
                    </div>
                    <div className="main">
                        ddd
                    </div>
                </PageContentComponent>
            </div>
        );
    }
}