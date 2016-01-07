/*jshint node:true*/
var RSVP  = require('rsvp');

module.exports = {
  description: 'add packages for your material based project',
  
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  beforeInstall: function (options) {
    return RSVP.all([
      this.addBowerPackageToProject('material-design-icons', '~2.1.0')
    ]);
  },

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall: function(options) {
  //   // Perform extra work here.
  // }
};
