const { reducer } = require('../reducer');
const { ROUTE_CHANGED } = require('../action-types');

describe('On ROUTE_CHANGED', () => {
  it('updates the route', () => {
    const action = {
      type: ROUTE_CHANGED,
      payload: '/email',
    };
    const prevState = { route: '/name' };

    const result = reducer(prevState, action);

    expect(result).toEqual({ route: '/email' });
  });
});
