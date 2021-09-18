import { action, makeObservable, observable } from 'mobx';
import { enableStaticRendering } from 'mobx-react';

enableStaticRendering(typeof window === 'undefined');

class AuthStore {
  isAuthenticated: boolean;

  loading: boolean;

  constructor() {
    this.isAuthenticated = false;
    this.loading = false;
    makeObservable(this, {
      isAuthenticated: observable,
      login: action,
    });
  }

  login = (email: string, password: string): void => {
    try {
      console.error('login()', email, password);
      this.isAuthenticated = true;
    } catch (err) {
      console.error('ERR :: Auth login ', err);
      throw err;
    } finally {
      this.loading = false;
    }
  };
}

export default AuthStore;
