'use strict';

/**
 * @author harris
 */

module.exports = app => {
  app.router.get('/', app.controller.home.index);
};