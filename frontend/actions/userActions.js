
import Axios from 'axios';
import Cookie from 'js-cookie';

import {SEND_EMAIL_FAIL,
    SEND_EMAIL_REQUEST,
    SEND_EMAIL_SUCCESS} from '../constants/userConstants';

const sendEmail = (email) => async (dispatch) => {
    dispatch({type: SEND_EMAIL_REQUEST, payload:{email}});
    try {
        const {data} = await Axios.post("/api/users/storeemail", {email});
        dispatch({type: SEND_EMAIL_SUCCESS, payload: data});
    }
    catch (error) {
        dispatch({type: SEND_EMAIL_FAIL, payload: error.message});
    }
}

export {sendEmail};
