// loginView.js
// -------
define(["jquery", "backbone", "models/Model", "text!templates/loginView.html"],

    function($, Backbone, Model, template){

        var loginView = Backbone.View.extend({

            // The DOM Element associated with this view
            el: "#main-app",

            // View constructor
            initialize: function() {

                // Calls the view's render method
                this.render();

            },

            // View Event Handlers
            events: {
                "click #submitLogin": "login"

            },

            // Renders the view's template to the UI
            render: function() {

                // Setting the view's template property using the Underscore template method
                this.template = _.template(template, {});

                // Dynamically updates the UI with the view's template
                this.$el.html(this.template);

                // Maintains chainability
                return this;

            },

            // SubmitLogin
            login: function(event) {
                //alert("from login view");
                event.preventDefault();
                $('.alert-error').hide(); // Hide any errors on a new submit
                var url = 'http://localhost:14807/Administrativo/srv_Administrativo.svc/login';
                console.log('Loggin in... ');
                var formValues = {
                    usuario: $('#inputEmail').val(),
                    senha: $('#inputPassword').val()
                };

                $.ajax({
                    url:url,
                    type:'POST',
                    dataType:"json",
                    data: formValues,
                    success:function (data) {

                        console.log(["Login request details: ", data]);

                        if(data.error) {  // If there is an error, show the error messages
                            $('.alert-error').text(data.error.text).show();
                        }
                        else { // If not, send them back to the home page
                            window.location.replace('#panel');
                        }
                    },
                    error:function(xhr) {
                        console.log(xhr.getReponseHeader('SSG-Response'));
                    }
                });


            }

        });

        // Returns the View class
        return loginView;

    }

);