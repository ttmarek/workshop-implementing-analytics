const {
  updateRoute,
  updateFormData,
} = require('../action-creators');

const { ROUTE_CHANGED, FORM_UPDATED } = require('../action-types');

describe('updateRoute(route)', () => {
  it('returns the correct Redux action', () => {
    const result = updateRoute('/name');
    expect(result).toEqual({
      type: ROUTE_CHANGED,
      payload: '/name',
    });
  });
});

describe('updateFormData(data)', () => {
  it('returns the correct Redux action', () => {
    const result = updateFormData({ name: 'john' });
    expect(result).toEqual({
      type: FORM_UPDATED,
      payload: { name: 'john' },
    });
  });
});
