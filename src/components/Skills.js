import React, { Component } from 'react';
import Progress from './Progress';

class Skills extends Component {
  state = {
    title: 'Skills',
    tools: [
      { id: 1, name: 'HTML', width: '15%', color: 'bg-secondary' },
      { id: 2, name: 'CSS', width: '25%', color: 'bg-primary' },
      { id: 3, name: 'React', width: '30%', color: 'bg-dark' },
      { id: 4, name: 'Node', width: '45%', color: 'bg-danger' },
      { id: 5, name: 'Ruby', width: '57%', color: 'bg-warning' },
      { id: 6, name: 'Python', width: '75%', color: 'bg-success' },
      { id: 7, name: 'Django', width: '90%', color: 'bg-info' },
    ],
  };
  render() {
    return (
      <>
        <div className='row bg-secondary'>
          <p className='col-12 text-center text-white py-3 fs-1 fw-bolder'>{this.state.title}</p>
          <p className='col-8 offset-2 text-center text-white px-4 py-2 fs-6 text-wrap'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis earum ut et saepe
            libero consectetur nisi corporis cum facilis animi dolores hic omnis sapiente quis totam
            ducimus harum eius facere minus consequatur, nobis incidunt. Quas at dolorum ullam
            cumque itaque, expedita recusandae eius qui facere eum voluptas! Possimus labore alias
            provident maxime dolorum, ex hic repellendus eveniet aut veritatis. Delectus.
          </p>
          <div className='row p-3'>
            <div className='col-2 offset-2 p-5 text-white text-center'>
              <p>Lorem, ipsum dolor.</p>
              <hr className='px-1' />
              <p>Lorem, ipsum dolor.</p>
              <p>Lorem, ipsum dolor.</p>
              <p>Lorem, ipsum dolor.</p>
              <p>Lorem, ipsum dolor.</p>
            </div>
            <div className='col-6 offset-1 p-3'>
              {this.state.tools.map(tool => (
                <Progress key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Skills;
