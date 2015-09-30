/* global getController */

import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | link action', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /link-action', function(assert) {
  assert.expect(1);

  visit('/link-action');

  andThen(function() {
    assert.equal(currentURL(), '/link-action');
  });
});

Ember.Test.registerHelper('getController',
  function(app, controllerName) {
    return app.__container__.lookup('controller:' + controllerName);
  }
);


test('clicking {{link-to}} with closure action specified correctly transition to other route and triggers an action', function(assert) {
  assert.expect(4);

  visit('/link-action');

  andThen(function() {
    assert.equal(currentURL(), '/link-action');
  });

  const controller = getController('link-action');

  assert.equal(controller.get('testActionFired'), false, `action didn't fire yet`);

  click('#linkWithClosureAction');

  andThen(function() {
    assert.equal(controller.get('testActionFired'), true, 'action did fire');
    assert.equal(currentURL(), '/other-route');
  });
});

test('clicking {{link-to}} with action name specified correctly transition to other route and triggers an action', function(assert) {
  assert.expect(4);

  visit('/link-action');

  andThen(function() {
    assert.equal(currentURL(), '/link-action');
  });

  const controller = getController('link-action');

  assert.equal(controller.get('testActionFired'), false, `action didn't fire yet`);

  click('#linkWithActionName');

  andThen(function() {
    assert.equal(controller.get('testActionFired'), true, 'action did fire');
    assert.equal(currentURL(), '/other-route');
  });
});
