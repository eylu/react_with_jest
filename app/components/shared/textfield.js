import React from 'react';

const TextFieldGroup = (
  { 
    value, 
    error, 
    type, 
    name, 
    label, 
    id,
    placeholder, 
    onChange, 
    onBlur, 
    onKeyUp 
  }) => {
  return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input
          onChange={onChange}
          onBlur={onBlur}
          onKeyUp={onKeyUp}
          value={value}
          type={type}
          name={name}
          placeholder={placeholder}
          id={id} 
        />
        <div>{error}</div>
      </div>
  );
}

TextFieldGroup.defaultProps = {
  type: "text",
  onChange: () => {},
  onBlur: () => {},
  onKeyUp: () => {},
};

export default TextFieldGroup;