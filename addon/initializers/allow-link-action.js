import Ember from 'ember';

export function initialize() {
  Ember.LinkComponent.reopen({
    _sendInvokeAction() {
      this.sendAction('invokeAction');
    },

    init() {
      this._super(...arguments);

      // Map desired event name to invoke function
      const eventName = this.get('eventName'),
            attachedAction = this.get('invokeAction');

      if (attachedAction) {
        this.on(eventName, this, this._sendInvokeAction);
      }

      this.on(eventName, this, this._invoke);
    },

    willDestroyElement() {
      if (this.get('invokeAction')) {
        this.off(this.get('eventName'), this, this._sendInvokeAction);
      }
    }
  });
}

export default {
  name: 'allow-link-action',
  initialize: initialize
};
