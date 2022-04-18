import React, { Component } from 'react';
class Hero extends Component {
  state = {
    image: 'pic2.jpg',
    name: 'Ahmed Ashour',
    metier: 'Junior Web Developer',
  };
  render() {
    return (
      <>
        <div className='position-relative'>
          <img src={this.state.image} alt='' className='w-100' />
          <h3 className='text-white position-absolute top-30 start-10'>{this.state.name}</h3>
          <h4 className='text-white position-absolute top-40 start-10'>{this.state.metier}</h4>
          <button className='position-absolute start-10 top-60 px-5 py-3 bg-transparent text-white border-white border-3 rounded'>
            Lorem, ipsum.
          </button>
        </div>
      </>
    );
  }
}

export default Hero;
