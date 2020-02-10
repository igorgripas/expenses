import {Action} from '@ngrx/store';
import {UserInfo} from "firebase";

export const AUTHENTICATE_SUCCESS = '[Auth] authenticate success';
export const LOGOUT_START = '[Auth] logout start';
export const LOGOUT_SUCCESS = '[Auth] logout success';

export class AuthenticateSuccess implements Action {
  readonly type = AUTHENTICATE_SUCCESS;

  constructor(public payload: UserInfo) {}
}

export class LogoutStart implements Action {
  readonly type = LOGOUT_START;
}

export class LogoutSuccess implements Action {
  readonly type = LOGOUT_SUCCESS;
}


export type AuthActions = AuthenticateSuccess
  | LogoutStart
  | LogoutSuccess;
