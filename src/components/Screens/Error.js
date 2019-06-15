import React from 'react';
import './style.scss';

const Error = (props) => {
  return (
    <div className='screen error-screen'>
      <div className='row'>
        <div className='col-sm action-label'>
                  Error
        </div>
      </div>
      <div className='row'>
        <div className='col-sm error-label'>
          {props.errorMessage}
        </div>
      </div>
    </div>
  );
};

export default Error;
