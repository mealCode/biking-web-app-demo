export const FORM_UPDATE = 'FORM_UPDATE';

type initialFormStateProps = {
  _id?: string;
  date: string;
  location: string;
  notes: string;
};

export const initialFormState: initialFormStateProps = {
  _id: '',
  date: '',
  location: '',
  notes: '',
};

type ReducerActionType = {
  type: string;
  inputIdentifier: string;
  inputValue: string;
};

export const formReducer = (state = initialFormState, action: ReducerActionType) => {
  switch (action.type) {
    case FORM_UPDATE:
      return {
        ...state,
        [action.inputIdentifier]: action.inputValue,
      };

    default:
      return state;
  }
};
