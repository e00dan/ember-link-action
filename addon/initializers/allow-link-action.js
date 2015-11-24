import Ember from 'ember';
import LinkActionMixin from '../mixins/link-action';

export function initialize() {
  Ember.LinkComponent.reopen(LinkActionMixin);
}

export default {
  name: 'allow-link-action',
  initialize: initialize
};
