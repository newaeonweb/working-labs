// Model.js
// --------
define([
    "jquery",
    "backbone"
    ],

    function($, Backbone) {

        // Creates a new Backbone Model class object
        UserModel = Backbone.Model.extend({
            // Set Resturl
            urlRoot: '/user',

            // Default values for all of the Model attributes
            defaults: {
                logged_in: false,
                nmCompletoUsuario: '',
                email: ''
            },

            // Model Constructor
            initialize: function() {
                _.bindAll(this);

            },

            // Gets called automatically by Backbone when the set and/or save methods are called (Add your own logic)
            validate: function(attributes) {

            }

        });

        // Returns the Model class
        return UserModel;

    }

);
