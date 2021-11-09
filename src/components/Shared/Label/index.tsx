/* eslint-disable react/require-default-props */
import React from 'react';

type LabelProps = {
  children: React.ReactNode;
  onToggle?: () => void;
};

const Label = ({ children, onToggle }: LabelProps) => (
  <div
    className="text-sm text-gray-500 font-medium w-1/3"
    onClick={onToggle}
    onKeyUp={() => {}}
    role="button"
    tabIndex={0}
  >
    {children}
  </div>
);

export default Label;
