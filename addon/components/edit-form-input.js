import ParentComponentSupport from 'ember-composability/mixins/parent-component-support';

import EditFormField from './artoo-edit-form-field';
import layout from '../templates/components/edit-form-input';

export default EditFormField.extend(ParentComponentSupport, {
  layout
});