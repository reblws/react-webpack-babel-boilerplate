import React from 'react';
import PropTypes from 'prop-types';

Hello.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default function Hello({ msg }) {
  return <div>Hello {msg}</div>;
}
