import React, { Component } from 'react';
class Cards extends Component {
  state = {
    name: this.props.item.name,
    description: this.props.item.description,
    color: this.props.item.color,
  };
  render() {
    //state is not needed .. confusion
    //fragment not needed
    return (
      <> 
        <div className='col'>
          <div className={`card h-100 ${this.state.color} `}>
            <div className='card-body'>
              <h5 className='card-title'>{this.state.name}</h5>
              <p className='card-text'>{this.state.description}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Cards;
