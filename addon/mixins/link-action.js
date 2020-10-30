import Mixin from '@ember/object/mixin';

export default Mixin.create({
  init() {
    this._super(...arguments);

    if (this.invokeAction) {
      this._attachActionEvent();
    }
  },
  willDestroyElement() {
    if (this.invokeAction) {
      this._detachActionEvent();
    }
  },

  _sendInvokeAction() {
    this.invokeAction();
  },
  _attachActionEvent() {
    this.on(this.eventName, this, this._sendInvokeAction);
  },
  _detachActionEvent() {
    this.off(this.eventName, this, this._sendInvokeAction);
  }
});
