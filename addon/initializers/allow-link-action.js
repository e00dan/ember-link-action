import LinkComponent from '@ember/routing/link-component';
import LinkActionMixin from '../mixins/link-action';

export function initialize() {
  LinkComponent.reopen(LinkActionMixin);
}

export default {
  name: 'allow-link-action',
  initialize
};
