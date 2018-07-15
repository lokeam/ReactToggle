import React, { Component } from 'react';
import Toggle from './ToggleRPC.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Toggle Component Sample</h1>
          <Toggle>
            {({on, toggle}) => (
              <div>
                {on && <h1>Show Me</h1>}
                <button onClick={toggle}>Show / Hide</button>
              </div>
            )}
          </Toggle>
      </div>
    );
  }
}
