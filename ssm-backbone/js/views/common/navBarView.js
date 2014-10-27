define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/common/navBarTemplate.html'
], function($, _, Backbone, navBarTemplate){

  var NavBarView = Backbone.View.extend({
    el: $("#nav"),

    render: function(){
      
      // $('.kr-navbar-alt li').removeClass('kr-active');
      // $('.kr-navbar-alt li a[href="#"]').parent().addClass('kr-active');
      
      this.$el.html(navBarTemplate);

     
 
    }

  });

  return NavBarView;
  
});