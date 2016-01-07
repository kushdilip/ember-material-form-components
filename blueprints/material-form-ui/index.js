/*jshint node:true*/
module.exports = {
  description: 'Install packages for your material app',
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function(options) {
    var packages = [
      // 'ember-material-lite@0.1.13'
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
