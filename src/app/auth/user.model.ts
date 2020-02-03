export class User {
  constructor(public email: string,
              id: string,
              private _token: string,
              private _tokenExpirationDate: Date
  ) {}

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }

  get mlsToExpiration() {
    if (!this._tokenExpirationDate) {
      return null;
    }
    return this._tokenExpirationDate.getTime() - new Date().getTime();
  }

}
