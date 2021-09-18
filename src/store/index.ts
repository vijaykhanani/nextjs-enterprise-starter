import AuthStore from './auth';
import createStore from './createStore';

export const store = {
  authStore: new AuthStore(),
};
export const { Consumer: StoreConsumer, Provider: StoreProvider, useStore } = createStore(store);
