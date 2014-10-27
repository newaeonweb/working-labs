// homeView.js
// -------
define([
    "jquery",
    "backbone",
    "backstretch",
    "models/Model",
    "text!templates/homeView.html"
    ],

    function($, Backbone, backstretch, Model, template){

        var homeView = Backbone.View.extend({

            // The DOM Element associated with this view
            el: "#main-app",

            // View constructor
            initialize: function() {



                // Calls the view's render method
                this.render();

            },

            // View Event Handlers
            events: {

            },

            // Renders the view's template to the UI
            render: function() {

                // Setting the view's template property using the Underscore template method
                this.template = _.template(template, {});

                // Dynamically updates the UI with the view's template
                this.$el.html(this.template);

                // Show slideshow
                $.backstretch([
                    "img/scs.jpg",
                    "img/scs2.jpg"
                ], {duration: 5000, fade: 750});

                // Maintains chainability
                return this;

            }

        });



        // Returns the View class
        return homeView;

    }
);