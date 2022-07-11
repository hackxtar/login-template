import React from "react";
import "./input.scss";
const Input = ({
  className,
  type,
  name,
  onChange,
  onBlur,
  value,
  placeholder,
}) => {
  return (
    <div class={"container " + className}>
      <div class="group">
        <input
          type={type}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          required
        />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>{placeholder}</label>
      </div>
    </div>
  );
};

export default Input;
