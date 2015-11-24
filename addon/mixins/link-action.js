import Ember from 'ember';

export default Ember.Mixin.create({
  _sendInvokeAction() {
    this.sendAction('invokeAction');
  },

  init() {
    this._super(...arguments);

    // Map desired event name to invoke function
    const eventName = this.get('eventName');

    if (this.get('invokeAction')) {
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
