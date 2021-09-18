import AuthStore from './index';

describe('AuthStore', () => {
  it('checking store properties', () => {
    const store = new AuthStore();
    expect(store.loading).toBe(false);
  });
});
