import Ember from 'ember';

export default Ember.Component.extend({
  i18n: Ember.inject.service(),
  init: function () {
    this._super();
    Ember.Binding.from(`model.${this.get('propertyName')}`).to('value').connect(this);
    Ember.Binding.from(`model.errors.${this.get('propertyName')}`).to('errors').connect(this);
  },

  classNames: ['edit-form-field'],
  classNameBindings: ['hidden'],
  attributeBindings: ['property:data-property', 'lookupCategory:data-lookup'],
    
  disableEdit: Ember.computed.equal('setting.editable', false),
  defaultValue: Ember.computed.oneWay('setting.default'),
  label: Ember.computed.oneWay('setting.label'),
  hidden: Ember.computed.not('setting.inEdit'),
  optional: Ember.computed.oneWay('setting.optional'),
  required: Ember.computed.oneWay('setting.required'),
  variable: Ember.computed.oneWay('setting.variable'),
  regex: Ember.computed.oneWay('setting.regex'),
  format: Ember.computed.oneWay('setting.format'),
  
  newLine: Ember.computed.oneWay('setting.newLine'),
  
  categoryVisible: Ember.computed.oneWay('setting.category_visible'),
  categoryLabel: Ember.computed.oneWay('setting.category_label'),
  categoryDefault: Ember.computed.oneWay('setting.category_default'),
  
  parentProperty: Ember.computed.oneWay('setting.parentProperty'),
  
  propertyName: Ember.computed.oneWay('properties.child'),
  model: Ember.computed('parentView.content', 'properties.parent', {
    get() {
      return this.get(`parentView.content.${this.get('properties.parent')}`);  
    }
  }),
  
  properties: Ember.computed('property', 'optional', function () {
    var property = this.get('property') || '';
    var properties = property.split('.');
    
    var childProperty = properties.pop();
    return Ember.Object.create({
      parent: properties.join('.'),
      child: childProperty
    });
  }),
  
  mandatory: Ember.computed('model', 'property', 'optional', 'required', {
    get() {
      var result = false;
      var model = this.get('model');
      if (model) {
        let propertyName = this.get('propertyName');
        let value = Ember.get(model, `validations.${propertyName}`);
        
        result = value && value.presence;
        if (!(value && value.presence)) {
          let required = this.get('required');
          let optional = this.get('optional');
          
          if (typeof(optional) === 'boolean') {
            required = !optional;
          }
          result = !!required;
        }
        
      }
      return result;
    }
  }),
  
  errorObserver: Ember.observer('composableChildren.@each.errorMessage', function () {
    let [child] = this.get('composableChildren');
    let isError = child && !!child.get('errorMessage');
    let property = this.get('property');
    // [Todo] Fix this
    let targetObject = this.get('targetObject');
    targetObject.send('registerError', property, isError);
  })  
});