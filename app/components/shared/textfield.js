/* @flow */
import React from 'react';

type Props = {
  value?:string, 
  error?:string, 
  type:string, 
  name:string,
  label:string,
  id?:string,
  placeholder?:string, 
  onChange:Function,
  onBlur:Function,
  onKeyUp:Function,
};

const TextFieldGroup = ({value,error,type,name,label,id,placeholder,onChange,onBlur,onKeyUp}:Props) => {
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