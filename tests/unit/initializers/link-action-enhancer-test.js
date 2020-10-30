import EmberObject from '@ember/object';
import Evented from '@ember/object/evented';
import { module, test } from 'qunit';
import { LinkActionOverride } from 'ember-link-action/initializers/link-action-enhancer';

module('Unit | Initializers | Link action enhancer', function() {
  test('it exists', function(assert) {
    assert.expect(1);

    const LinkActionObject = EmberObject.extend(LinkActionOverride);
    const subject = LinkActionObject.create();

    assert.ok(subject);
  });

  test('_sendInvokeAction sends `invokeAction` closure action', function(assert) {
    assert.expect(1);

    const LinkActionObject = EmberObject.extend(LinkActionOverride);
    const subject = LinkActionObject.create();

    subject.invokeAction = () => {
      assert.ok(true, 'closure action was called');
    };

    subject._sendInvokeAction();
  });

  test('_attachActionEvent is called on initialization if invokeAction is specified', function(assert) {
    assert.expect(1);

    const LinkActionObject = EmberObject.extend(LinkActionOverride);

    LinkActionObject.create({
      invokeAction: 'someAction',
      _attachActionEvent() {
        assert.ok(true, 'sendAction is called');
      }
    });
  });

  test('_detachActionEvent is called when willDestroyElement is called and invokeAction is specified', function(assert) {
    assert.expect(1);

    const LinkActionObject = EmberObject.extend(LinkActionOverride);
    const subject = LinkActionObject.create({
      invokeAction: 'someAction',
      _attachActionEvent() {},
      _detachActionEvent() {
        assert.ok(true);
      }
    });

    subject.willDestroyElement();
  });

  test('_attachActionEvent subscribes _sendInvokeAction to `eventName` event', function(assert) {
    assert.expect(1);

    const EXAMPLE_EVENT_NAME = 'click';

    const LinkActionObject = EmberObject.extend(LinkActionOverride, Evented);
    const subject = LinkActionObject.create({
      eventName: EXAMPLE_EVENT_NAME,
      _sendInvokeAction() {
        assert.ok(true);
      }
    });

    subject.set('invokeAction', 'someAction');
    subject.trigger(EXAMPLE_EVENT_NAME);

    subject._attachActionEvent();
    subject.trigger(EXAMPLE_EVENT_NAME);
  });

  test('_detachActionEvent unsubscribes _sendInvokeAction from `eventName` event', function(assert) {
    assert.expect(0);

    const EXAMPLE_EVENT_NAME = 'click';

    const LinkActionObject = EmberObject.extend(LinkActionOverride, Evented);
    const subject = LinkActionObject.create({
      eventName: EXAMPLE_EVENT_NAME,
      _sendInvokeAction() {
        assert.ok(false);
      }
    });

    subject.set('invokeAction', 'someAction');

    subject._attachActionEvent();

    subject._detachActionEvent();

    subject.trigger(EXAMPLE_EVENT_NAME);
  });
});
