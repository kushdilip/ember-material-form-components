import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('textfield');
  this.route('checkbox');
  this.route('select');
  this.route('date');
});

export default Router;
