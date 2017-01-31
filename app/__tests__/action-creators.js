const {
  updateRoute,
  updateFormData,
  ssnApplicationClicked,
} = require('../action-creators');

const {
  ROUTE_CHANGED,
  NAME_UPDATED,
  EMAIL_UPDATED,
  ADDRESS_UPDATED,
  SSN_UPDATED,
  SSN_APPLICATION_CLICKED,
} = require('../action-types');

describe('updateRoute(route)', () => {
  it('returns the correct Redux action', () => {
    const result = updateRoute('/name');
    expect(result).toEqual({
      type: ROUTE_CHANGED,
      payload: '/name',
    });
  });
});

describe('updateFormData(field, data)', () => {
  describe('when field is "name", and data is "john"', () => {
    it('returns the correct Redux action', () => {
      const result = updateFormData('name', 'john');
      expect(result).toEqual({
        type: NAME_UPDATED,
        payload: 'john',
      });
    });
  });
  describe('when field is "email", and data is "john@gmail.com"', () => {
    it('returns the correct Redux action', () => {
      const result = updateFormData('email', 'john@gmail.com');
      expect(result).toEqual({
        type: EMAIL_UPDATED,
        payload: 'john@gmail.com',
      });
    });
  });
  describe('when field is "address", and data is "129 Spadina Ave"', () => {
    it('returns the correct Redux action', () => {
      const result = updateFormData('address', '129 Spadina Ave');
      expect(result).toEqual({
        type: ADDRESS_UPDATED,
        payload: '129 Spadina Ave',
      });
    });
  });
  describe('when field is "ssn" and data is 123-456-789', () => {
    it('returns the correct Redux action', () => {
      const result = updateFormData('ssn', '123-456-789');
      expect(result).toEqual({
        type: SSN_UPDATED,
        payload: '123-456-789',
      });
    });
  });
});

describe('ssnApplicationClicked()', () => {
  it('returns the correct Redux action', () => {
    const result = ssnApplicationClicked();
    expect(result).toEqual({
      type: SSN_APPLICATION_CLICKED,
    });
  });
});
