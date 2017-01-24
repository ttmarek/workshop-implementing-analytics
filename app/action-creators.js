const { ROUTE_CHANGED } = require('./action-types');

const updateRoute = route => ({
  type: ROUTE_CHANGED,
  payload: route,
});

module.exports = { updateRoute };
