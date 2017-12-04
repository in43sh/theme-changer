import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
  constructor() {
    super();

    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true'
    };

    this.updateColor = this.updateColor.bind(this);
  }

  // updateColor
  updateColor(val) {
    this.setState({
      fontColor: val
    })
  }

  // updateSize
  updateSize

  // updateFamily

  // updateEditStatus

  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle />
          <ColorChanger update={this.updateColor} />
          <SizeChanger />
          <FamilyChanger />
        </div>
        <div className="textArea">
          <TextContainer fontColor={this.state.fontColor} />
        </div>
      </div>
    )
  }
}

export default App;
