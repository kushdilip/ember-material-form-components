import Ember from 'ember';

export default Ember.Mixin.create({
  init: function () {
    this._super();
    if (this.get('model') && this.get('property')) {
      Ember.Binding.from(`model.${this.get('property')}`).to('value').connect(this);
    }
  }
});