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
  const update = sliceOfState => Object.assign({}, state, sliceOfState);
  switch (action.type) {
    case ROUTE_CHANGED:
      return update({ route: action.payload });
    case NAME_UPDATED:
      return update({ name : action.payload });
    case EMAIL_UPDATED:
      return update({ email: action.payload });
    case ADDRESS_UPDATED:
      return update({ address: action.payload });
    case SSN_UPDATED: {
      const ssn = action.payload;
      if (ssn.length < state.ssn.length) { // backspacing
        return update({ ssn });
      }
      const needsADash = str => /^\d{3}$/g.test(str) || /^\d{3}-\d{3}$/g.test(str);
      const formattedSSN = needsADash(ssn) ? `${ssn}-` : ssn;
      return update({ ssn: formattedSSN });
    }
    default:
      return state;
  }
}

module.exports = { reducer };
