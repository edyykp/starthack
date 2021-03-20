import {SEND_EMAIL_FAIL,
SEND_EMAIL_REQUEST,
SEND_EMAIL_SUCCESS,
GET_VERIF_FAIL,
GET_VERIF_SUCCESS,
GET_VERIF_REQUEST} from '../constants/userConstants';

function sendEmailReducer(state = {}, action) {
    switch (action.type) {
      case SEND_EMAIL_REQUEST:
        return { loading: true };
      case SEND_EMAIL_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case SEND_EMAIL_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
  }
}

function getVerificationReducer(state = {}, action) {
  switch (action.type) {
    case GET_VERIF_REQUEST:
      return { loading: true };
    case GET_VERIF_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case GET_VERIF_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

export {sendEmailReducer, getVerificationReducer}