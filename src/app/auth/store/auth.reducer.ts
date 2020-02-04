import * as AuthActions from './auth.actions';
import {UserInfo} from "firebase";

export interface State {
  user: UserInfo;
}

const initialState: State = {
  user: null,
};

export function authReducer(state: State = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case AuthActions.LOGOUT: {
      return {
        ...state,
        user: null
      };
    }
    case AuthActions.AUTHENTICATE_SUCCESS: {
      const user = {...action.payload};
      return { ... state, user, authError: null, loading: false} ;
    }
    default:
      return state;
  }
}
