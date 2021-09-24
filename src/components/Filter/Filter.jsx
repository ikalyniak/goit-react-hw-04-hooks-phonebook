import React from 'react';
import PropTypes from 'prop-types';

import styles from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <label>
      Find contact by name
      <input
        name="filter"
        type="text"
        value={value}
        onChange={onChange}
        className={styles.filter}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
