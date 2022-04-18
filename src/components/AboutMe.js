import React, { Component } from 'react';
class AboutMe extends Component {
  state = {
    title: 'About Me',
  };
  render() {
    return (
      <>
        <div className='py-2 d-flex flex-row justify-content-around align-items-baseline'>
          <p className='fw-bolder fs-3 py-2 col-4 text-center'>{this.state.title}</p>
          <div className='col-8 px-1'>
            <p className='py-2 px-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dicta voluptatem,
              voluptates soluta eveniet libero aperiam animi voluptate, minus obcaecati qui quo
              veniam pariatur molestias quas ex at ad mollitia harum repellat commodi officiis!
              Ipsum in, placeat quas optio fugit nobis voluptates id delectus laudantium inventore
              aspernatur debitis, officia maxime temporibus! Nostrum tempore hic facilis esse
              voluptas, delectus officia alias exercitationem quibusdam iure distinctio commodi quia
              quasi, recusandae quam voluptate praesentium libero odio perspiciatis aspernatur eaque
              placeat! Praesentium maiores at molestias in tempora doloribus atque facilis
              consequuntur, esse, consequatur et totam similique alias beatae pariatur accusantium
              veniam perspiciatis saepe harum.
            </p>
            <button className='px-5 py-2 mx-5 bg-dark text-white'>Lorem, ipsum.</button>
          </div>
        </div>
      </>
    );
  }
}

export default AboutMe;
