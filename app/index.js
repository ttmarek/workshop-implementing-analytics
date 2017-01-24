const Redux = require('redux');
const { reducer } = require('./reducer');
const { renderUI } = require('./render-ui');
const { updateRoute } = require('./action-creators');

const store = Redux.createStore(reducer);

const actions = {
  updateRoute: route => {
    console.log('update Route called');
    store.dispatch(updateRoute(route));
  },
};

const updateApp = () => renderUI(store.getState(), actions);

updateApp();
store.subscribe(updateApp);
