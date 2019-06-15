import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const Error = props => (
  <div className="screen error-screen">
    <div className="row">
      <div className="col-sm action-label">
                  Error
      </div>
    </div>
    <div className="row">
      <div className="col-sm error-label">
        {props.errorMessage}
      </div>
    </div>
  </div>
);

Error.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

export default Error;
