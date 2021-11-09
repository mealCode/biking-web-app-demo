import { BikingRecord } from 'types/bikingRecord';

export const SET_BIKING_RECORDS = 'SET_BIKING_RECORDS';
export const SET_NEW_BIKING_RECORD = 'SET_NEW_BIKING_RECORD';
export const UPDATE_BIKING_RECORD = 'UPDATE_BIKING_RECORD';

export const setBikingRecordsAction = (records: BikingRecord[]) => ({
  type: SET_BIKING_RECORDS,
  payload: {
    records,
  },
});

export const setNewBikingRecordAction = (records: BikingRecord[]) => ({
  type: SET_NEW_BIKING_RECORD,
  payload: {
    records,
  },
});

export const updateBikingRecordAction = (records: BikingRecord[]) => ({
  type: UPDATE_BIKING_RECORD,
  payload: {
    records,
  },
});
