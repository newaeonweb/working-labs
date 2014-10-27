// DesktopRouter.js
// ----------------
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

        var DesktopRouter = Backbone.Router.extend({

            initialize: function() {

                // Tells Backbone to start watching for hashchange events
                Backbone.history.start();

            },

            // All of your Backbone Routes (add more)
            routes: {

                // When there is no hash on the url, the home method is called
                "": "index",
                "login" : "login",
                "panel" : "panel"

            },

            index: function() {

                // Instantiates a new view
                new homeView();

            },
            login: function() {
                new loginView();
            },
            panel: function() {
                new panelView();
            }

        });

        // Tell jQuery to watch for any 401 or 403 errors and handle them appropriately
        $.ajaxSetup({
            statusCode: {
                401: function(){
                    // Redirec the to the login page.
                    window.location.replace('/#login');

                },
                403: function() {
                    // 403 -- Access denied
                    window.location.replace('/#denied');
                }
            }
        });

        // Include NavBar
        var bar = new navBarView();
        bar.render();

        // Returns the DesktopRouter class
        return DesktopRouter;

    }

);