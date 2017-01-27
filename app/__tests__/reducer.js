const { reducer } = require('../reducer');
const {
  ROUTE_CHANGED,
  FORM_UPDATED,
} = require('../action-types');

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

describe('On FORM_UPDATED', () => {
  describe('When the payload is { name: "john" }', () => {
    it('updates the name property in state', () => {
      const action = {
        type: FORM_UPDATED,
        payload: { name: 'john' },
      };
      const prevState = { name: '', email: '', address: '', ssn: '' };

      const result = reducer(prevState, action);

      expect(result).toEqual({ name: 'john', email: '', address: '', ssn: '' });
    });
  });
  describe('When the payload is { email: "john@gmail.com" }', () => {
    it('updates the email property in state', () => {
      const action = {
        type: FORM_UPDATED,
        payload: { email: 'john@gmail.com' },
      };
      const prevState = { name: 'john', email: '', address: '', ssn: '' };

      const result = reducer(prevState, action);

      expect(result).toEqual({
        name: 'john',
        email: 'john@gmail.com',
        address: '',
        ssn: ''
      });
    });
  });
  describe('When the payload is { address: "129 Spadina Ave" }', () => {
    it('updates the address property in state', () => {
      const action = {
        type: FORM_UPDATED,
        payload: { address: '129 Spadina Ave' },
      };
      const prevState = {
        name: 'john',
        email: 'john@gmail.com',
        address: '',
        ssn: ''
      };

      const result = reducer(prevState, action);

      expect(result).toEqual({
        name: 'john',
        email: 'john@gmail.com',
        address: '129 Spadina Ave',
        ssn: ''
      });
    });
  });
  describe('When the payload is { ssn: "123-456-789" }', () => {
    it('updates the ssn property in state', () => {
      const action = {
        type: FORM_UPDATED,
        payload: { ssn: '123-456-789' },
      };
      const prevState = {
        name: 'john',
        email: 'john@gmail.com',
        address: '129 Spadina Ave',
        ssn: ''
      };

      const result = reducer(prevState, action);

      expect(result).toEqual({
        name: 'john',
        email: 'john@gmail.com',
        address: '129 Spadina Ave',
        ssn: '123-456-789',
      });
    });
  });
});
