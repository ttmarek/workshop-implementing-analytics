const { updateRoute } = require('../action-creators');
const { ROUTE_CHANGED } = require('../action-types');

describe('updateRoute(route)', () => {
  it('returns the correct Redux action', () => {
    const result = updateRoute('/name');
    expect(result).toEqual({
      type: ROUTE_CHANGED,
      payload: '/name',
    });
  });
});
