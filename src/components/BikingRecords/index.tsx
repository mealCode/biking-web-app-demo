import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Label from 'components/Shared/Label';
import ModalMananger from 'components/ModalManager';

import { BikingRecord, BikingRecords } from 'types/bikingRecord';

import { setPickBikingRecord } from 'state/actions/pickRecord';

import api from 'api';
import { setBikingRecordsAction } from 'state/actions/bikingRecords';
import SearchRecordComponent from 'components/SearchRecord';

const BikingRecordsComponents = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sorting, setSorting] = useState(-1);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const bikingRecordsState = useSelector((state: BikingRecords) => state.bikingRecords.records);
  const [bikingRecords, setBikingRecords] = useState(bikingRecordsState);
  const onPickBikingRecord = (record: BikingRecord) => {
    dispatch(setPickBikingRecord(record));
    setIsOpen(true);
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };

  const toggleSorting = () => {
    setSorting((prevState) => -prevState);
  };

  const onToggleDateHandler = async () => {
    toggleSorting();
    const { status, data } = await api.post('/api/biking/filter', {
      filters: '',
      sorting,
    });
    if (status === 200) {
      dispatch(setBikingRecordsAction(data.data));
      setBikingRecords(data.data);
    }
  };

  const onFilterRecord = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term !== '') {
      const filteredBikingRecords = [...bikingRecordsState].filter((record) =>
        new RegExp(term.toLowerCase()).test(record.notes.toLowerCase()),
      );
      setBikingRecords(filteredBikingRecords);
    } else {
      setBikingRecords(bikingRecordsState);
    }
  };

  const fetchBikingRecords = useCallback(async () => {
    const { data, status } = await api.get('/api/biking/records');
    if (status === 200) {
      dispatch(setBikingRecordsAction(data.data));
      setBikingRecords(data.data);
    }
  }, [dispatch]);

  const onWatchStoreChanges = useCallback(() => {
    setBikingRecords(bikingRecordsState);
  }, [bikingRecordsState]);

  useEffect(() => {
    fetchBikingRecords();
  }, [fetchBikingRecords]);

  useEffect(() => {
    onWatchStoreChanges();
  }, [onWatchStoreChanges]);

  const noRecordsYet = () => (
    <div className="text-gray-600 text-sm mt-4">You have no record created yet, why not create one?</div>
  );

  return (
    <div>
      <div className="text-base font-semibold mb-4 text-gray-600">My Biking Achievements</div>
      <SearchRecordComponent onFilterRecord={onFilterRecord} searchTerm={searchTerm} />
      <div className="max-w-screen-md">
        <div className="flex flex-row text-sm text-left bg-gray-200 p-2">
          <Label onToggle={onToggleDateHandler}>Date</Label>
          <Label>Location</Label>
          <Label>Notes</Label>
        </div>
      </div>
      {bikingRecords.length === 0 && noRecordsYet()}
      <div className="max-w-screen-md">
        {bikingRecords.map((record: BikingRecord) => (
          <div
            className="flex flex-row text-sm text-left bg-gray-100 p-2 my-1 w-full cursor-pointer"
            key={record._id}
            onClick={() => onPickBikingRecord(record)}
            onKeyUp={() => {}}
            role="button"
            tabIndex={0}
          >
            <Label>{new Date(record.date).toDateString()}</Label>
            <Label>{record.location}</Label>
            <Label>{record.notes}</Label>
          </div>
        ))}
      </div>
      <ModalMananger isOpen={isOpen} onCloseModal={onCloseModal} modalType="edit" />
    </div>
  );
};

export default BikingRecordsComponents;
