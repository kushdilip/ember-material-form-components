/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-material-form-components',
  
  included: function(app) {
    this._super.included.apply(this, arguments);

    //style code to import materils icons separately
    app.import('vendor/material-import.css');
    
    // Import font files
    var materialIconPath = path.join(app.bowerDirectory, 'material-design-icons/iconfont');
    app.import(path.join(materialIconPath, 'MaterialIcons-Regular.eot'), {destDir: '/fonts'});
    app.import(path.join(materialIconPath, 'MaterialIcons-Regular.ttf'), {destDir: '/fonts'});
    app.import(path.join(materialIconPath, 'MaterialIcons-Regular.woff'), {destDir: '/fonts'});
    app.import(path.join(materialIconPath, 'MaterialIcons-Regular.woff2'), {destDir: '/fonts'});
    
    // Import images
    app.import(path.join(app.bowerDirectory, 'material-design-lite/src/images/buffer.svg'), {destDir: '/images'});
    app.import(path.join(app.bowerDirectory, 'material-design-lite/src/images/tick-mask.svg'), {destDir: '/images'});
    app.import(path.join(app.bowerDirectory, 'material-design-lite/src/images/tick.svg'), {destDir: '/images'});
  }
};
