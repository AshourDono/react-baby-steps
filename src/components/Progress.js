import React, { Component } from 'react';
class Progress extends Component {
  state = {
    name: this.props.tool.name,
    width: this.props.tool.width,
    color: this.props.tool.color,
  };
  render() {
    return (
      <>
        <div className='progress w-75' style={{ height: '35px', margin: '5px 0' }}>
          <div
            className={`progress-bar progress-bar-striped ${this.state.color}`}
            role='progressbar'
            style={{ width: this.state.width }}
            aria-valuenow='30'
            aria-valuemin='0'
            aria-valuemax='100'>
            {this.state.name}
          </div>
        </div>
      </>
    );
  }
}

export default Progress;
