const Redux = require('redux');
const createLogger = require('redux-logger');
const { reducer } = require('./reducer');
const { renderUI } = require('./render-ui');

const {
  updateRoute,
  updateFormData,
  ssnApplicationClicked,
} = require('./action-creators');

const { analyticsMiddleware } = require('./analytics');

const reduxLogger = createLogger();
const store = Redux.createStore(
  reducer,
  Redux.applyMiddleware(reduxLogger, analyticsMiddleware)
);

const actions = {
  updateRoute: route => store.dispatch(updateRoute(route)),
  updateFormData: (field, data) => store.dispatch(updateFormData(field, data)),
  ssnApplicationClicked: () => store.dispatch(ssnApplicationClicked()),
};

const updateApp = () => renderUI(store.getState(), actions);

updateApp();
store.subscribe(updateApp);
actions.updateRoute('/name');
