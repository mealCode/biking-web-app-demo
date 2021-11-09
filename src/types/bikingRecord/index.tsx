type InitialStateProps = {
  records: BikingRecord[];
};

export const initialState: InitialStateProps = {
  records: [],
};

export type BikingRecord = {
  _id?: string;
  date: string;
  location: string;
  notes: string;
};

export type BikingRecords = {
  bikingRecords: {
    records: BikingRecord[];
  };
};

export type PickedBikingRecord = {
  pickedBikingRecord: {
    record: BikingRecord;
  };
};
