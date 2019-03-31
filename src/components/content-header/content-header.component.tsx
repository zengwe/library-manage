import React, { Component, ComponentClass } from 'react';
import './content-header.css';
export class ContentHeaderComponent extends Component<{title: string}> {
  render(){
    return (
      <div className="content-header">
        <div className="name">
          {this.props.title}
        </div>
      </div>
    )
  }
}