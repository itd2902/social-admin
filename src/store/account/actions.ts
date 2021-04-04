import { Dispatch } from "react"
import { AccountActionTypes, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOG_OUT } from './types';
import { userService } from '../../services/user.service';
import { history } from '../../helper/history';

export const login = (email: string, password: string, from: string) => {
    return (dispatch: Dispatch<AccountActionTypes>) => {
        dispatch({
            type: LOGIN_REQUEST,
            payload: {
                email: email,
                password: password
            }
        });
        userService.login(email, password)
            .then(res => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res
                });
                history.push(from)
            }, (error) => {
                dispatch({
                    type: LOGIN_FAILURE,
                    payload: { error: error.toString() }
                })
            });
    }
}
export const logout = (): AccountActionTypes => {
    return { type: LOG_OUT }
}