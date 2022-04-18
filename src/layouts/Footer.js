import React from 'react';

function Footer() {
  return (
    <div className='bg-dark text-white sticky-bottom'>
      <p className='row fs-5 mx-5 py-2'>Contact Us</p>
      <div className='row'>
        <div className='col mx-5 py-2'>
          <div className='my-1'>
            <i className='fa-brands fa-facebook-f fa-xl mx-2'></i>Lorem ipsum dolor sit.
          </div>
          <div className='my-1'>
            <i className='fa-brands fa-twitter fa-xl mx-2'></i>Lorem ipsum dolor sit.
          </div>
        </div>
        <div className='col-2 offset-1 h-50 btn bg-transparent text-white border-white border-3 rounded'>
          Lorem, ipsum.
        </div>
        <div className='col offset-2'>
          <div className='row d-inline mx-4'>
            <i className='fa-brands fa-instagram fa-xl d-inline'></i>
            <i className='fa-brands fa-linkedin fa-xl d-inline'></i>
            <i className='fa-brands fa-github fa-xl d-inline'></i>
          </div>
          <div className='row mx-4 py-auto'>Lorem ipsum dolor sit.</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
