import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.reducer";
import {filter, map, take} from "rxjs/operators";

@Injectable({providedIn: "root"})
export class AuthSelectorService {
  constructor(private store: Store<AppState>){}

  public getUserObserver() {
    return this.store.select('auth').
    pipe(
      filter(authState => !authState.loading),
      take(1),
      map(authState => authState.user));
  }
}
