const {
  ROUTE_CHANGED,
  FORM_UPDATED,
} = require('./action-types');

const updateRoute = route => ({
  type: ROUTE_CHANGED,
  payload: route,
});

const updateFormData = data => ({
  type: FORM_UPDATED,
  payload: data,
});

module.exports = {
  updateRoute,
  updateFormData,
};
