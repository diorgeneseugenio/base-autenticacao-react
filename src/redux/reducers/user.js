import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from 'redux/actions/actionTypes'

let token = localStorage.getItem('token');
let isAuthenticated = localStorage.getItem('isAuthenticated');

const initialState = user ? { isAuthenticated, token, msg: '' } : {};

export function user(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                isAuthenticated: true,
                
            };
      
        case LOGOUT_SUCCESS:
            return {
                isAuthenticated: false,
                token: '',
                msg: action.msg
            };
        default:
            return state
    }
}