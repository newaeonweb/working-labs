define([
  'jquery',
  'underscore',
  'backbone',
  'krack',
  'backstretch',
  'views/common/FooterView',
  'views/common/NavBarView',
  'text!templates/home/homeTemplate.html'
], function($, _, Backbone, krack, backstretch, FooterView, NavBarView, homeTemplate){

  var HomeView = Backbone.View.extend({
    el: $("#page"),

    render: function(){

      this.$el.html(homeTemplate);

      // Ative slide on home page
//      $.backstretch([
//        "images/scs.jpg"
//       , "images/scs3.jpg"
//      ], {duration: 5000, fade: 750});

    }

  });

  return HomeView;
  
});
