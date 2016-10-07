import React, { Component } from 'react';

import Label from './Label'
import Stamp from './Stamp'

class App extends Component {
  render() {
    return (
      <div>
        <Label>Hello</Label>
        <Stamp>Approved</Stamp>
      </div>
    );
  }
}

export default App;
