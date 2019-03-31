import React, { Component, ComponentFactory, ComponentClass } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import { HomeComponent } from '../home/home.component';
import { PageContentComponent, IPageContentComponentProps, IRoute } from '../../../components/page-content.component/page-content.component';
import { SearchComponent } from '../search/search.component';
import { LogComponent } from '../log/log.component';
import './admin-container.css';
const gradePath = '/admin/';
interface IRouteInfo extends  IRoute{
    component: ComponentClass
}
const routes: { [key: string]: IRouteInfo} = {
    home: {
        name: '首页',
        path: gradePath + 'home',
        component: HomeComponent
    },
    search: {
        name: '查询',
        path: gradePath + 'search',
        component: SearchComponent
    },
    log: {
        name: '借阅日志',
        path: gradePath + 'log',
        component: LogComponent
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
                        <Switch>
                            <Route path={routes.home.path} component={ routes.home.component }></Route>
                            <Route path={routes.search.path} component={ routes.search.component }></Route>
                            <Route path={routes.log.path} component={ routes.log.component }></Route>
                        </Switch>
                    </div>
                </PageContentComponent>
            </div>
        );
    }
}