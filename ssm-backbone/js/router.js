// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'krack',
  'styler',
  'backstretch',
  'views/home/HomeView',
  'views/login/LoginView',
  'views/panel/PanelView',
  'views/common/navBarView',
  'views/common/FooterView'
], function($, _, Backbone, krack, styler, backstretch, HomeView, LoginView, PanelView, NavBarView, FooterView) {
  
  var AppRouter = Backbone.Router.extend({
    
    routes: {
      // Define some URL routes
      '': 'showHome',
      'login': 'showLogin',
      'panel': 'showPanel',
      
      // Default
      '*actions': 'defaultAction'
    }

  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    
    app_router.on('route:showHome', function(){
   
        // Call render on the module we loaded in via the dependency array
        var homeView = new HomeView();
        homeView.render();

    });

    app_router.on('route:showLogin', function () {
    
        // Call render on the module we loaded in via the dependency array
        var loginView = new LoginView();
        loginView.render();
    });

    app_router.on('route:showPanel', function () {
    
        // Call render on the module we loaded in via the dependency array
        var panelView = new PanelView();
        panelView.render();
    });

    app_router.on('route:defaultAction', function (actions) {
     
       // We have no matching route, lets display the home page 
        var homeView = new HomeView();
        homeView.render();
    });

    // Render nav
      var navBarView = new NavBarView();
      navBarView.render();

      // Render footer
      var footerView = new FooterView();
      footerView.render();

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
