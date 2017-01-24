const { ROUTE_CHANGED } = require('./action-types');

const initialState = {
  route: '/name',
};

function reducer(state = initialState, action) {
  console.log('***', action);
  const reducers = {
    ROUTE_CHANGED: {
      route: action.payload,
    },
  };
  return Object.assign({}, state, reducers[action.type]);
}

module.exports = { reducer };
