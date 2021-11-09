import React from 'react';
import { useSelector } from 'react-redux';
import Modal from 'modal';

import AddEditBikingRecordComponent from 'components/AddEditBikingRecord';

import { PickedBikingRecord } from 'types/bikingRecord';

import { pickedBikingRecordInitialState } from 'state/reducers/pickRecord';

type ModalManagerProps = {
  isOpen: boolean;
  onCloseModal: () => void;
  modalType: string;
};

const ModalMananger = ({ isOpen, onCloseModal, modalType }: ModalManagerProps) => {
  const pickedBikingRecord = useSelector((state: PickedBikingRecord) => state.pickedBikingRecord);
  return (
    <Modal open={isOpen}>
      <div className="flex justify-center mt-24">
        <div className="bg-white shadow-md rounded-2xl p-4">
          <div
            className="flex flex-1 flex-row-reverse text-base text-gray-500"
            onClick={onCloseModal}
            onKeyUp={() => {}}
            role="button"
            tabIndex={0}
          >
            x
          </div>
          <div>
            <AddEditBikingRecordComponent
              onCloseModal={onCloseModal}
              initialValue={modalType === 'add' ? pickedBikingRecordInitialState.record : pickedBikingRecord.record}
              modalType={modalType}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalMananger;
