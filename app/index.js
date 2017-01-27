const Redux = require('redux');
const { reducer } = require('./reducer');
const { renderUI } = require('./render-ui');
const {
  updateRoute,
  updateFormData,
} = require('./action-creators');

const store = Redux.createStore(reducer);

const actions = {
  updateRoute: route => store.dispatch(updateRoute(route)),
  updateFormData: data => store.dispatch(updateFormData(data)),
};

const updateApp = () => renderUI(store.getState(), actions);

updateApp();
store.subscribe(updateApp);
