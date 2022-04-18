import React, { Component } from 'react';
import Cards from './Cards';

class Projects extends Component {
  state = {
    title: 'Portfolio',
    items: [
      {
        id: 1,
        name: 'HTML',
        description:
          'Lorem ipsum dolor sit amet consectetur h kgjhf  df lhgdf j ghkdjf dj hdjk hgdjk fhgdkfj hgdj ghdfkj ghdkj ghdjkf gh.',
        color: 'bg-success',
      },
      {
        id: 2,
        name: 'CSS',
        description:
          'Lorem ipsum dolor sit amet consectetur h kgjhf  df lhgdf j ghkdjf dj hdjk hgdjk fhgdkfj hgdj ghdfkj ghdkj ghdjkf gh.',
        color: 'bg-info',
      },
      {
        id: 3,
        name: 'React',
        description:
          'Lorem ipsum dolor sit amet consectetur h kgjhf  df lhgdf j ghkdjf dj hdjk hgdjk fhgdkfj hgdj ghdfkj ghdkj ghdjkf gh.',
        color: 'bg-success',
      },
      {
        id: 4,
        name: 'Node',
        description:
          'Lorem ipsum dolor sit amet consectetur h kgjhf  df lhgdf j ghkdjf dj hdjk hgdjk fhgdkfj hgdj ghdfkj ghdkj ghdjkf gh.',
        color: 'bg-info',
      },
      {
        id: 5,
        name: 'Ruby',
        description:
          'Lorem ipsum dolor sit amet consectetur h kgjhf  df lhgdf j ghkdjf dj hdjk hgdjk fhgdkfj hgdj ghdfkj ghdkj ghdjkf gh.',
        color: 'bg-success',
      },
      {
        id: 6,
        name: 'Python',
        description:
          'Lorem ipsum dolor sit amet consectetur h kgjhf  df lhgdf j ghkdjf dj hdjk hgdjk fhgdkfj hgdj ghdfkj ghdkj ghdjkf gh.',
        color: 'bg-info',
      },
    ],
  };
  render() {
    return (
      <>
        <p className='row fs-2 p-5 text-danger fw-bolder'>{this.state.title}</p>

        <div className='row row-cols-3 m-3 g-4'>
          {this.state.items.map(item => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </>
    );
  }
}

export default Projects;
