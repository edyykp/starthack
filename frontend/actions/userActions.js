
import Axios from 'axios';
import Cookie from 'js-cookie';

import {SEND_EMAIL_FAIL,
    SEND_EMAIL_REQUEST,
    SEND_EMAIL_SUCCESS,
    GET_VERIF_REQUEST,
    GET_VERIF_SUCCESS,
    GET_VERIF_FAIL} from '../constants/userConstants';

const sendEmail = (email) => async (dispatch) => {
    dispatch({type: SEND_EMAIL_REQUEST, payload:{email}});
    try {
        const {data} = await Axios.post("http://192.168.0.116:3000/api/users/storeemail", {email});
        dispatch({type: SEND_EMAIL_SUCCESS, payload: data});
    }
    catch (error) {
        console.log(error.message);
        dispatch({type: SEND_EMAIL_FAIL, payload: error.message});
    }
}

const getVerification = (email) => async (dispatch) => {
    dispatch({type: GET_VERIF_REQUEST, payload:{email}});
    try {
        const {data} = await Axios.get("http://192.168.0.116:3000/api/users/getverification/" + email);
        dispatch({type: GET_VERIF_SUCCESS, payload: data});
    }
    catch (error) {
        dispatch({type: GET_VERIF_FAIL, payload: error.message});
    }
}

export {sendEmail, getVerification};
