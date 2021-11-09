/* eslint-disable react/require-default-props */
import React from 'react';

type ButtonBorderedProps = {
  children: React.ReactNode;
  onSubmit: () => void;
};

const ButtonBordered = ({ children, onSubmit }: ButtonBorderedProps) => (
  <div
    data-test="ButtonBordered"
    className="border-2 border-yellow-500 rounded-sm text-center text-sm py-2 text-black font-medium block cursor-pointer"
    onClick={onSubmit}
    onKeyUp={() => {}}
    role="button"
    tabIndex={0}
  >
    {children}
  </div>
);

export default ButtonBordered;
