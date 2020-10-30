import LinkComponent from '@ember/routing/link-component';

export const LinkActionOverride = {
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
};

export function initialize() {
  LinkComponent.reopen(LinkActionOverride);
}

export default {
  name: 'link-action-enhancer',
  initialize
};
