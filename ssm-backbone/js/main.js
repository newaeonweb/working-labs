// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    jquery: 'libs/jquery',
    underscore: 'libs/underscore-1.7.0',
    backbone: 'libs/backbone-1.1.2',
    krack: 'libs/krack',
    styler: 'libs/styler',
    backstretch: 'libs/backstretch',
    templates: '../templates'
  },
    // Sets the configuration for your third party scripts that are not AMD compatible
    shim: {
        "backbone": {
            "deps": [ "underscore", "jquery" ],
            "exports": "Backbone"  //attaches "Backbone" to the window object
        },
        "krack": {
            "deps": [ "jquery" ],
            "exports": "Krack"  //attaches "Backbone" to the window object
        },
        "styler": {
            "deps": [ "jquery" ]
        },
        "backstretch": {
            "deps": [ "jquery" ]
        }

    } // end Shim Configuration
//  shim: {
//    "krack": { deps: ["jquery"] },
//    "backstretch": { deps: ["jquery"] },
//    "styler": { deps: ["jquery"] }
//  }

});

require([
  // Load our app module and pass it to our definition function
  'app'

], function(App){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});
