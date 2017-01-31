const { createMiddleware } = require('redux-beacon');
const { GoogleAnalytics } = require('redux-beacon/targets/google-analytics');
const { logger } = require('redux-beacon/extensions/logger');

const {
  ROUTE_CHANGED,
  SSN_APPLICATION_CLICKED,
} = require('./action-types');

const eventsMap = {
  ROUTE_CHANGED: {
    eventFields: action => ({
      hitType: 'pageview',
      page: action.payload,
    }),
    eventSchema: {
      page: value => [
        '/name',
        '/email',
        '/address',
        '/ssn',
        '/complete',
      ].includes(value),
    },
  },
  SSN_APPLICATION_CLICKED: {
    eventFields: action => ({
      hitType: 'event',
      eventCategory: 'SSN',
      eventAction: 'SSN Application Form Requested',
    }),
  },

};

const analyticsMiddleware = createMiddleware(eventsMap, GoogleAnalytics, { logger });

module.exports = {
  eventsMap,
  analyticsMiddleware,
};
