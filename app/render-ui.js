const Vue = require('vue/dist/vue.common.js');

Vue.component('nav-item', {
  props: ['page', 'onClick' ],
  template: '<li v-on:click="handleClick" v-bind:class="{ active: page.isActive }">{{ page.title }}</li>',
  methods: {
    handleClick() {
      this.onClick(this.page.route);
    },
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
    formData: {},
    currentRoute: '/name',
    updateRoute: () => {},
  },
  methods: {
    submitForm() {
      this.updateRoute('/complete');
    },
    handleNameInput(event) {
      this.updateFormData('name', event.target.value);
    },
    handleEmailInput(event) {
      this.updateFormData('email', event.target.value);
    },
    handleAddressInput(event) {
      this.updateFormData('address', event.target.value);
    },
    handleSSNInput(event) {
      this.updateFormData('ssn', event.target.value);
    },
  },
});

function renderUI(state, actions) {
  const {
    updateRoute,
    updateFormData,
    ssnApplicationClicked,
  } = actions;
  const {
    route,
    name,
    email,
    address,
    ssn,
  } = state;

  app.ssnApplicationClicked = ssnApplicationClicked;
  app.updateRoute = updateRoute;
  app.currentRoute = route;
  app.formData = { name, email, address, ssn };
  app.updateFormData = updateFormData;
  // Add an active class to the active navbar link
  app.pages = app.pages.map(page => Object.assign({}, page, { isActive: page.route === route }));
};

module.exports = { renderUI };
