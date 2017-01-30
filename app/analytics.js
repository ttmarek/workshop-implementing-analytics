const { createMiddleware } = require('redux-beacon');
const { GoogleAnalytics } = require('redux-beacon/targets/google-analytics');
const { logger } = require('redux-beacon/extensions/logger');

const {
  ROUTE_CHANGED,
} = require('./action-types');

const eventsMap = {
  ROUTE_CHANGED: {
    eventFields: action => ({
      hitType: 'pageview',
      page: action.payload,
    })
  },
};

const analyticsMiddleware = createMiddleware(eventsMap, GoogleAnalytics, { logger });

module.exports = {
  eventsMap,
  analyticsMiddleware,
};
