import Ember from 'ember';
import LinkActionMixin from '../mixins/link-action';

const { LinkComponent } = Ember;

export function initialize() {
  LinkComponent.reopen(LinkActionMixin);
}

export default {
  name: 'allow-link-action',
  initialize
};
