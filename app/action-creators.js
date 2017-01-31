const {
  ROUTE_CHANGED,
  NAME_UPDATED,
  EMAIL_UPDATED,
  ADDRESS_UPDATED,
  SSN_UPDATED,
  SSN_APPLICATION_CLICKED,
} = require('./action-types');

const updateRoute = route => ({
  type: ROUTE_CHANGED,
  payload: route,
});


function updateFormData(field, data, key) {
  switch (field) {
    case 'name':
      return { type: NAME_UPDATED, payload: data };
    case 'email':
      return { type: EMAIL_UPDATED, payload: data };
    case 'address':
      return { type: ADDRESS_UPDATED, payload: data };
    case 'ssn':
      return { type: SSN_UPDATED, payload: data };
    default:
      return {};
  }
}

const ssnApplicationClicked = () => ({
  type: SSN_APPLICATION_CLICKED
});

module.exports = {
  updateRoute,
  updateFormData,
  ssnApplicationClicked,
};
