/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-material-form-components',
  
  included: function(app) {
    this._super.included.apply(this, arguments);

    app.import('vendor/material-import.css');
    
    var materialIconPath = path.join(app.bowerDirectory, 'material-design-icons/iconfont');
    app.import(path.join(materialIconPath, 'MaterialIcons-Regular.eot'), {destDir: '/fonts'});
    app.import(path.join(materialIconPath, 'MaterialIcons-Regular.ttf'), {destDir: '/fonts'});
    app.import(path.join(materialIconPath, 'MaterialIcons-Regular.woff'), {destDir: '/fonts'});
    app.import(path.join(materialIconPath, 'MaterialIcons-Regular.woff2'), {destDir: '/fonts'});
  }
};
