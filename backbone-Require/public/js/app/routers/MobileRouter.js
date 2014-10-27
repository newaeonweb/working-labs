// MobileRouter.js
// ---------------
define([
    "jquery",
    "backbone",
    "models/Model",
    "views/common/navBarView",
    "views/homeView",
    "views/loginView",
    "views/panelView",
    "collections/Collection"
    ],
        
    function($, Backbone, Model, navBarView, homeView, loginView, panelView, Collection) {

        var MobileRouter = Backbone.Router.extend({

            initialize: function() {

                // Tells Backbone to start watching for hashchange events
                Backbone.history.start();

            },

            // All of your Backbone Routes (add more)
            routes: {
                
                // When there is no hash bang on the url, the home method is called
                "": "index",
                "login" : "login",
                "panel" : "panel"

            },

            index: function() {

                // Instantiates a new view which will render the header text to the page
                new homeView();

            },
            login: function() {
                new loginView();
            },
            panel: function() {
                new panelView();
            }
    
        });

        // Returns the MobileRouter class
        return MobileRouter;

    }

);