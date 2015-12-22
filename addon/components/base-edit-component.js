import Ember from 'ember';
import EditFieldMixin from '../mixins/edit-field';

export default Ember.Component.extend(EditFieldMixin, {
  didInsertElement: function () {
    let mdlfield = this.$('.mdl-textfield');
    //[Todo] Work on upgrading input/date/select fields to mdlTextfield
    // let mdlTextfield = new window.MaterialTextfield(mdlfield[0]);
    // this.set('_mdlComponent', mdlTextfield);
    this.set('mdlfield',mdlfield);
  }.on('didInsertElement'),
  
  didValueChange: Ember.observer('value', function () {
    let defaultValue = this.get('defaultValue');
    if (!Ember.isEmpty('default') && Ember.isEmpty('value')) {
      this.set('value', defaultValue);
    }
  }).on('init'),
    
  errorMessage: Ember.computed('errors.@each', 'mdlfield', 'value', 'mandatory', {
    get() {
      let mdlfield = this.get('mdlfield');
      let errors = this.get('errors') || [];
      let value = this.get('value');
      let mandatory = this.get('mandatory');
      let regex = this.get('regex');
      let regExp = new RegExp(regex);
      let format = this.get('format');

      let isValid = true;
      if (mandatory && Ember.isEmpty(value)) {
        errors = ['can\'t be blank'];
        isValid = false;
      } else if(regex && !`${value}`.match(regExp)) {
        errors = [format];
        isValid = false;
      } else {
        isValid = !Ember.isPresent(errors);
      }
        
      if (mdlfield) {
        if (isValid) {
          mdlfield.removeClass('is-invalid');
        } else {
          mdlfield.addClass('is-invalid');
        }
      }

      this.set('isValid', isValid);
      return errors.join(', ');
    }
  })
});