const Redux = require('redux');
const createLogger = require('redux-logger');
const { reducer } = require('./reducer');
const { renderUI } = require('./render-ui');

const {
  updateRoute,
  updateFormData,
} = require('./action-creators');

const reduxLogger = createLogger();
const store = Redux.createStore(reducer, Redux.applyMiddleware(reduxLogger));

const actions = {
  updateRoute: route => store.dispatch(updateRoute(route)),
  updateFormData: (field, data) => store.dispatch(updateFormData(field, data)),
};

const updateApp = () => renderUI(store.getState(), actions);

updateApp();
store.subscribe(updateApp);
