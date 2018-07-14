import React, { Component } from 'react';
import Toggle from './ToggleRenderProps.js';

export default class App extends Component {
  render() {
    return (
      <div>
      	<h1>Toggle Component Sample</h1>
      	<Toggle render={({on, toggle}) => (
      			<div>
      				{on && <h1>Show Me</h1>}
      				 <button onClick={toggle}>Menu</button>
      			</div>
      		)}/>
      </div>
    );
  }
}
