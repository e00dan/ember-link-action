import Ember from 'ember';

export function initialize() {
  Ember.LinkComponent.reopen({
    init() {
      this._super(...arguments);

      // Map desired event name to invoke function
      const eventName = this.get('eventName'),
            attachedAction = this.get('invokeAction');

      if (attachedAction) {
        this.on(eventName, () => this.sendAction('invokeAction'));
      }

      this.on(eventName, this, this._invoke);
    }
  });
}

export default {
  name: 'allow-link-action',
  initialize: initialize
};
