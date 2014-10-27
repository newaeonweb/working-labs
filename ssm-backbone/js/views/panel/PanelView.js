define([
  'jquery',
  'underscore',
  'backbone',
  'krack',
  'text!templates/panel/panelTemplate.html'
], function($, _, Backbone, krack, panelTemplate){

  var PanelView = Backbone.View.extend({
    el: $("#page"),

    render: function(){

      this.$el.html(panelTemplate);
      
      $('.kr-navbar-alt li').removeClass('kr-active');
      $('.kr-navbar-alt li a[href="'+window.location.hash+'"]').parent().addClass('kr-active');
      

     
 
    }

  });

  return PanelView;
  
});