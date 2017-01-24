const Vue = require('vue/dist/vue.common.js');

Vue.component('nav-item', {
  props: ['page', 'onClick' ],
  template: '<li v-on:click="handleClick" v-bind:class="{ active: page.isActive }">{{ page.title }}</li>',
  methods: {
    handleClick: function() {
      this.onClick(this.page.route);
    }
  }
});

const app = new Vue ({
  el: '#app',
  data: {
    pages: [
      { title: 'name', route: '/name', isActive: true },
      { title: 'email', route: '/email', isActive: false },
      { title: 'address', route: '/address', isActive: false },
      { title: 'SSN', route: '/ssn', isActive: false },
    ],
    updateRoute: () => {},
  },
});

function renderUI(state, actions) {
  const {
    updateRoute,
  } = actions;
  const {
    route,
  } = state;

  app.updateRoute = updateRoute;
  // Add an active class to the active navbar link
  app.pages = app.pages.map(page => Object.assign({}, page, { isActive: page.route === route }));
};

module.exports = { renderUI };
