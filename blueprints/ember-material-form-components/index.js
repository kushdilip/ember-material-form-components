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

  afterInstall: function(options) {
    var packages = [
      'ember-material-lite@0.1.13'
    ];

    if (typeof this.addAddonsToProject === 'function') { // newer versions of ember-cli
      return this.addAddonsToProject({
        packages: packages
      });
    }

    return packages.reduce(function (prev, pkg, index) {
      if (index === 1) {
        prev = this.addAddonToProject(prev);
      }
      return prev.then(this.addAddonToProject(pkg));
    }.bind(this));
  }
};
