import { SET_BIKING_RECORDS, SET_NEW_BIKING_RECORD } from 'state/actions/bikingRecords';
import { BikingRecord, initialState } from 'types/bikingRecord';

export type BikingRecordsAction = {
  type: string;
  payload: {
    records: BikingRecord[];
  };
};

export default (state = initialState, action: BikingRecordsAction) => {
  switch (action.type) {
    case SET_BIKING_RECORDS:
      return { ...state, ...action.payload };

    case SET_NEW_BIKING_RECORD:
      return { ...state.records, records: state.records.concat(action.payload.records) };

    default:
      return state;
  }
};
