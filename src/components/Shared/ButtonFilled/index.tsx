/* eslint-disable react/require-default-props */
import React from 'react';

type ButtonFilledProps = {
  children: React.ReactNode,
  onSubmit: () => void,
}

const ButtonFilled = ({
  children,
  onSubmit,
}: ButtonFilledProps) => (
  <div
    className="bg-yellow-500 hover:bg-yellow-400 rounded-sm text-center text-sm py-2 text-white font-medium block cursor-pointer"
    onClick={onSubmit}
    onKeyUp={() => {}}
    role="button"
    tabIndex={0}
  >
    {children}
  </div>
);

export default ButtonFilled;
