import { history, apiController, notifyError, checkValidationToken } from 'services';

import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from './actionTypes'

export const login = (email, password) => {
    return dispatch => {
       let payload = {
            email,
            password
       }
       return apiController.post('/login', payload)
       .then((response)=>{      
            if (response.data.access_token) {
                localStorage.setItem('token', response.data.access_token);
                localStorage.setItem('isAuthenticated', true);
                dispatch(setUserDetails(response.data));
            }
       })
       .catch((error) => {
            notifyError(error)
       })
    };
}

export const logout = (msg = '') => {
    return dispatch => {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('token');
        dispatch(logoutUser(msg));
        history.push('/');
    }
}

export const getProtected = () => {
    return dispatch => {
        return apiController.get('/protected')
        .then((response)=>{      
            console.log(response)
        })
        .catch((error) => {
            let response = error.response
            /* This function check the validation of the JWT */
            let validated = checkValidationToken(response)
            if (validated) {
                notifyError(error)
            } else {
                dispatch(logout('Your session expired!'))
            }
        })
    }
}

const setUserDetails = (user) => {
      return {
          type: LOGIN_SUCCESS,
          token: user.access_token
      }
}

const logoutUser = (msg = '') => {
      return{
          type: LOGOUT_SUCCESS,
          msg: msg
      }
}