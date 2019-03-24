import React, { Component, ComponentClass } from 'react';
import { HeaderComponent } from '../header/header.component';
import './page-content.css';
import { Link, NavLink } from 'react-router-dom';
export interface IRoute {
  name: string,
  path: string,
  [key: string]: any
}
export interface IPageContentComponentProps {
  routes: {
    [key: string]: IRoute
  };
}
export class PageContentComponent extends Component<IPageContentComponentProps> {
  private headerComp: any;
  private mainComp: any;
  constructor(prop: any, state: any) {
    console.log(prop)
    super(prop,state);
    for(let child of prop.children) {
      if(child.props.className == 'main') {
        this.mainComp = child.props.children;
        continue;
      }
      if(child.props.className == 'header') {
        this.headerComp = child.props.children;
        continue;
      }
    }
  }
  private createLeftNavs() {
    let navs = [];
    for(let key in this.props.routes) {
      navs.push(
        <NavLink key={key} activeClassName="item-nav-active"   className="item-nav"  to={this.props.routes[key].path}>{this.props.routes[key].name}</NavLink>
      );
    }
    return navs;
  }
  render() {
    return (
      <div>
        <HeaderComponent></HeaderComponent>
        <div className="container">
          <div className='left-bar'>
             {this.createLeftNavs()}
          </div>
          <div className="content">
            {this.mainComp}
          </div>
        </div>
      </div>
    );
  }
}