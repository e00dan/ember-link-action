import Mixin from '@ember/object/mixin';

export default Mixin.create({
  init() {
    this._super(...arguments);

    if (this.get('invokeAction')) {
      this._attachActionEvent();
    }
  },
  willDestroyElement() {
    if (this.get('invokeAction')) {
      this._detachActionEvent();
    }
  },

  _sendInvokeAction() {
    this.invokeAction();
  },
  _attachActionEvent() {
    this.on(this.get('eventName'), this, this._sendInvokeAction);
  },
  _detachActionEvent() {
    this.off(this.get('eventName'), this, this._sendInvokeAction);
  }
});
