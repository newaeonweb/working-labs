define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/login/loginTemplate.html'
], function($, _, Backbone, loginTemplate){

  var LoginView = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      
    
      this.$el.html(loginTemplate);

     
 
    }

  });

  return LoginView;
  
});