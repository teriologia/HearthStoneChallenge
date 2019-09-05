import {GETALLCARDS, GETALLCARDSSUCCESS, GETALLCARDSFAIL} from '../../types';

const INITIAL_STATE = {
  error: '',
  processing: false,
  data: null,
};

export const cardData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GETALLCARDS:
      return {
        ...state,
        processing: true,
      };
    case GETALLCARDSSUCCESS:
      return {
        ...state,
        processing: false,
        data: action.payload,
      };
    case GETALLCARDSFAIL:
      return {
        ...state,
        error: 'Failed',
        processing: false,
        data: action.payload,
      };
    default:
      return state;
  }
};
