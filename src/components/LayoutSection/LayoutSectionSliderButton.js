import React, { Component } from 'react';

export default class LayoutSectionSliderButton extends Component {
  handleClick(e) {
    e.preventDefault()
    console.log(e.target)
  }

  render() {
    return (
      <button
        type="button"
        onClick={e => this.handleClick(e)}
        style={{
          width: '10px',
          height: '10px',
          boxShadow: 'inset 0 0 0 1px black',
          borderRadius: '50%',
          appearance: 'none',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
      >
      </button>
    )
  }
}
