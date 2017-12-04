import React, { Component } from 'react';

export default class EditToggle extends Component {
  render() {
    return (
      <select className="dropDownContainer ml0" onChange={e => this.props.update(event.targe.value)}>
        <option value="true"> Allow Edit </option>
        <option value="false"> Disable Edit </option>
      </select>
    )
  }
}