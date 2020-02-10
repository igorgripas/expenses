import * as AuthActions from './auth.actions';
import {UserInfo} from "firebase";

export interface State {
  user: UserInfo;
  loading: boolean;
}

const initialState: State = {
  user: null,
  loading: true,
};

export function authReducer(state: State = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case AuthActions.LOGOUT_SUCCESS: {
      return {
        ...state,
        loading: false,
        user: null
      };
    }
    case AuthActions.AUTHENTICATE_SUCCESS: {
      const user = {...action.payload};
      return { ... state, user, loading: false} ;
    }
    default:
      return state;
  }
}
