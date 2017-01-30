const { reducer } = require('../reducer');
const {
  ROUTE_CHANGED,
  NAME_UPDATED,
  EMAIL_UPDATED,
  ADDRESS_UPDATED,
  SSN_UPDATED,
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

describe('On NAME_UPDATED', () => {
  it('updates the name property in state', () => {
    const action = {
      type: NAME_UPDATED,
      payload: 'john',
    };
    const prevState = { name: '', email: '', address: '', ssn: '' };

    const result = reducer(prevState, action);

    expect(result).toEqual({ name: 'john', email: '', address: '', ssn: '' });
  });
});

describe('On EMAIL_UPDATED', () => {
  it('updates the email property in state', () => {
    const action = {
      type: EMAIL_UPDATED,
      payload: 'john@gmail.com',
    };
    const prevState = {
      name: 'john',
      email: '',
      address: '',
      ssn: ''
    };

    const result = reducer(prevState, action);

    expect(result).toEqual({
      name: 'john',
      email: 'john@gmail.com',
      address: '',
      ssn: ''
    });
  });
});

describe('On ADDRESS_UPDATED', () => {
  it('updates the address property in state', () => {
    const action = {
      type: ADDRESS_UPDATED,
      payload: '129 Spadina Ave',
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

describe('On SSN_UPDATED', () => {
  it('updates the ssn property in state', () => {
    const action = {
      type: SSN_UPDATED,
      payload: '123-456-789',
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
