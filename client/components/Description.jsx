import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ editorial, description }) => (
  <div className="description-container">
    <div className="editorial">
      <p>{editorial}</p>
    </div>
    <div className="description">
      <p>{description}</p>
    </div>
  </div>
);

Description.propTypes = {
  editorial: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Description;
