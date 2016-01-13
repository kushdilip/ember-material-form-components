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
    //Do extra work here
  }
};
