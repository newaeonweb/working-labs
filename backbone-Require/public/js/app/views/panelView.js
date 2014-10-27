// panelView.js
// -------
define([
    "jquery",
    "backbone",
    "backstretch",
    "models/Model",
    "text!templates/panelView.html"],

    function($, Backbone, backstretch, Model, template){

        var panelView = Backbone.View.extend({

            // The DOM Element associated with this view
            el: "#main-app",

            // View constructor
            initialize: function() {

                // Remove Slideshow
                $.backstretch('destroy');

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



                // Maintains chainability
                return this;

            }

        });

        // Returns the View class
        return panelView;

    }

);