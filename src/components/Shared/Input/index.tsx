/* eslint-disable react/require-default-props */
import React from 'react';

type InputProps = {
  type: string;
  value?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ type, value, name, onChange }: InputProps) => (
  <div>
    <input
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      className="border-2 border-gray-200 rounded-md ring-0 p-1 m-1 outline-none placeholder-gray-200 w-60"
    />
  </div>
);

export default Input;
