/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import FieldStyled from './FieldStyled';

// == Composant
const Field = ({
  value,
  changeValue,
  placeholder,
  name,
  type,
}) => {
  const handleChange = (evt) => {
    // console.log(evt.target.name, evt.target.value);
    changeValue(evt.target.name, evt.target.value);
  };

  return (
    <FieldStyled>
      <input
        className="input"
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
      />
      <label
        className="label"
        htmlFor={name}
      >
        {placeholder}
      </label>
    </FieldStyled>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  changeValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'text',
    'email',
    'password',
    'number',
    'tel',
    'url',
  ]),
};

// Valeur de prop par défaut
Field.defaultProps = {
  value: '',
  type: 'text',
};

// == Export
export default Field;
