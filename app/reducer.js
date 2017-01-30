const {
  ROUTE_CHANGED,
  NAME_UPDATED,
  EMAIL_UPDATED,
  ADDRESS_UPDATED,
  SSN_UPDATED,
} = require('./action-types');

const initialState = {
  route: '/name',
  name: '',
  email: '',
  address: '',
  ssn: '',
};

function reducer(state = initialState, action) {
  const reducers = {
    ROUTE_CHANGED: { route: action.payload },
    NAME_UPDATED: { name: action.payload },
    EMAIL_UPDATED: { email: action.payload },
    ADDRESS_UPDATED: { address: action.payload },
    SSN_UPDATED: { ssn: action.payload },
  };
  return Object.assign({}, state, reducers[action.type]);
}

module.exports = { reducer };
