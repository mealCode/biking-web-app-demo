import React, { useState } from 'react';

import ButtonFilled from 'components/Shared/ButtonFilled';
import ModalMananger from 'components/ModalManager';

const SidebardComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="text-sm text-gray-500 px-4 mt-1">Dashboard</div>
      <div className="bg-yellow-500 text-white">
        <div className="text-sm ml-4 cursor-pointer mt-2 p-2">My Achievements</div>
      </div>
      <div className="mt-12 px-4">
        <ButtonFilled onSubmit={() => setIsOpen(true)}>Add New</ButtonFilled>
      </div>
      <ModalMananger isOpen={isOpen} onCloseModal={onCloseModal} modalType="add" />
    </div>
  );
};

export default SidebardComponent;
