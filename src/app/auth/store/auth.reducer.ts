import {User} from '../user.model';
import * as AuthActions from './auth.actions';

export interface State {
  user: User;
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
      const user = new User(action.payload.email, action.payload.userId, action.payload.token, action.payload.expirationDate);
      return { ... state, user, authError: null, loading: false} ;
    }
    default:
      return state;
  }
}
