import { BikingRecord } from 'types/bikingRecord';

export const PICK_BIKING_RECORD = 'PICK_BIKING_RECORD';

export const setPickBikingRecord = (record: BikingRecord) => ({
  type: PICK_BIKING_RECORD,
  payload: {
    record,
  },
});
