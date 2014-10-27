// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'krack',
  'styler',
  'backstretch',
  'router' // Request router.js
], function($, _, Backbone, krack, backstretch, styler, Router){
  var initialize = function(){
    // Pass in our Router module and call it's initialize function
    Router.initialize();
  };

  return {
    initialize: initialize
  };
});
