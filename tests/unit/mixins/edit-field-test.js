import Ember from 'ember';
import EditFieldMixin from '../../../mixins/edit-field';
import { module, test } from 'qunit';

module('Unit | Mixin | edit field');

// Replace this with your real tests.
test('it works', function(assert) {
  var EditFieldObject = Ember.Object.extend(EditFieldMixin);
  var subject = EditFieldObject.create();
  assert.ok(subject);
});
