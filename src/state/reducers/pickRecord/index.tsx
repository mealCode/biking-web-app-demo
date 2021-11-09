import { PICK_BIKING_RECORD } from 'state/actions/pickRecord';

import { BikingRecord } from 'types/bikingRecord';

export const pickedBikingRecordInitialState = {
  record: {
    _id: '',
    date: '',
    location: '',
    notes: '',
  },
};

type PickBikingRecordAction = {
  type: string;
  payload: {
    record: BikingRecord;
  };
};

export default (state = pickedBikingRecordInitialState, action: PickBikingRecordAction) => {
  switch (action.type) {
    case PICK_BIKING_RECORD:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
