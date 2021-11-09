import React, { useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import usePlacesService from 'react-google-autocomplete/lib/usePlacesAutocompleteService';

import Input from 'components/Shared/Input';
import Label from 'components/Shared/Label';
import SearchResultComponent, { PlacePredictionsTypes } from 'components/SearchResult';
import ButtonFilled from 'components/Shared/ButtonFilled';

import MapConfigs from 'configs/maps';

import { formReducer, FORM_UPDATE } from 'state/useReducer';
import { setBikingRecordsAction, setNewBikingRecordAction } from 'state/actions/bikingRecords';

import { BikingRecord, BikingRecords } from 'types/bikingRecord';

import api from 'api';
import ButtonBordered from 'components/Shared/ButtonBordered';

const { GOOGLE_MAP_API_KEY } = MapConfigs;

type InitialValueProps = {
  initialValue: BikingRecord;
  onCloseModal: () => void;
  modalType: string;
};

const AddEditBikingRecordComponent = ({ initialValue, onCloseModal, modalType }: InitialValueProps) => {
  const dispatch = useDispatch();
  const { placePredictions, getPlacePredictions, isPlacePredictionsLoading } = usePlacesService({
    apiKey: GOOGLE_MAP_API_KEY,
  });
  const [formState, dispatchFormState] = useReducer(formReducer, {
    date: initialValue.date
      ? new Date(initialValue.date).toISOString().split('T')[0]
      : new Date().toISOString().split('T')[0],
    location: initialValue.location || '',
    notes: initialValue.notes || '',
  });

  const [showSearchResult, setShowResult] = useState(false);
  const bikingRecords = useSelector((state: BikingRecords) => state.bikingRecords.records);

  const onDispatchFormState = (type: string, inputIdentifier: string, inputValue: string) => {
    dispatchFormState({
      type,
      inputIdentifier,
      inputValue,
    });
  };

  const onSearchPlace = (e: React.ChangeEvent<HTMLInputElement>): void => {
    getPlacePredictions({ input: e.target.value });
    setShowResult(true);
    onDispatchFormState(FORM_UPDATE, 'location', e.target.value);
  };

  const onSelectLocation = (details: PlacePredictionsTypes) => {
    setShowResult(false);
    onDispatchFormState(FORM_UPDATE, 'location', details.description);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onDispatchFormState(FORM_UPDATE, e.target.name, e.target.value);
  };

  const onSubmitHandler = async () => {
    switch (modalType) {
      case 'add': {
        const { status, data } = await api.post('/api/biking/create', formState);
        if (status === 201) {
          dispatch(setNewBikingRecordAction([data.data]));
          onCloseModal();
        }
        break;
      }

      case 'edit': {
        formState._id = initialValue._id;
        const { status, data } = await api.put('/api/biking/update', formState);
        if (status === 200) {
          const updatedBikingRecords = bikingRecords.map((record) => {
            if (record._id === data.data._id) {
              return data.data;
            }
            return record;
          });
          dispatch(setBikingRecordsAction(updatedBikingRecords));
          onCloseModal();
        }
        break;
      }

      default:
        break;
    }
  };

  const onDeleteHandler = async () => {
    const { status } = await api.delete('/api/biking/delete', {
      headers: {},
      data: {
        _id: initialValue._id,
      },
    });
    if (status === 200) {
      const updatedBikingRecords = bikingRecords.filter((record) => record._id !== initialValue._id);
      dispatch(setBikingRecordsAction(updatedBikingRecords));
      onCloseModal();
    }
  };

  const renderSearchResult = () => (
    <div className="m-2">
      {showSearchResult && (
        <SearchResultComponent
          isPlacePredictionsLoading={isPlacePredictionsLoading}
          placePredictions={placePredictions}
          onSelectLocation={onSelectLocation}
        />
      )}
    </div>
  );

  return (
    <form noValidate>
      <div className="text-lg font-medium text-center m-2">Add new Biking Achievement</div>
      <div className="m-2">
        <Label>Date</Label>
        <Input type="date" name="date" onChange={onInputChange} value={formState.date} />
      </div>
      <div className="m-2">
        <Label>Location</Label>
        <Input type="text" name="location" onChange={onSearchPlace} value={formState.location} />
      </div>
      {renderSearchResult()}
      <div className="m-2">
        <Label>Notes</Label>
        <Input type="text" name="notes" onChange={onInputChange} value={formState.notes} />
      </div>
      <div className="m-2">
        <ButtonFilled onSubmit={onSubmitHandler}>{modalType === 'add' ? 'Save' : 'Edit'}</ButtonFilled>
      </div>
      {modalType === 'edit' && (
        <div className="m-2">
          <ButtonBordered onSubmit={onDeleteHandler}>Delete</ButtonBordered>
        </div>
      )}
    </form>
  );
};

export default AddEditBikingRecordComponent;
