import {Action} from '@ngrx/store';

export const AUTHENTICATE_SUCCESS = '[Auth] authenticate success';
export const LOGOUT = '[Auth] logout';

export const AUTO_LOGIN = '[Auth] auto login';

export class AuthenticateSuccess implements Action {
  readonly type = AUTHENTICATE_SUCCESS;

  constructor(public payload: {
    email: string;
    userId: string;
    token: string;
    expirationDate: Date;
    redirect: boolean;
  }) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class AutoLogin implements Action {
  readonly type = AUTO_LOGIN;
}

export type AuthActions = AuthenticateSuccess
  | Logout
  | AutoLogin;
