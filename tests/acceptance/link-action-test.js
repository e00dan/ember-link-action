/* global getRegistry */

import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

const precompileTemplate = Ember.HTMLBars.compile;

module('Acceptance | link action', {
  beforeEach() {
    this.application = startApp();
  },

  afterEach() {
    Ember.run(this.application, 'destroy');
  }
});

Ember.Test.registerHelper('getRegistry', app => app.registry);

test('clicking {{link-to}} with closure action specified correctly transition to other route and triggers an action', function(assert) {
  assert.expect(3);

  const registry = getRegistry();

  registry.register('controller:link-action', Ember.Controller.extend({
    actions: {
      testAction() {
        assert.ok('test action fired');
      }
    }
  }));

  registry.register('template:link-action', precompileTemplate(`
    {{#link-to 'other-route' invokeAction=(action 'testAction')}}
      Link to other route
    {{/link-to}}
  `));

  visit('/link-action');

  andThen(() => assert.equal(currentURL(), '/link-action'));

  click('a');

  andThen(() => assert.equal(currentURL(), '/other-route'));
});

test('clicking {{link-to}} with action name specified correctly transition to other route and triggers an action', function(assert) {
  assert.expect(3);

  const registry = getRegistry();

  registry.register('controller:link-action', Ember.Controller.extend({
    actions: {
      testAction() {
        assert.ok('test action fired');
      }
    }
  }));

  registry.register('template:link-action', precompileTemplate(`
    {{#link-to 'other-route' invokeAction='testAction'}}
      Link to other route
    {{/link-to}}
  `));

  visit('/link-action');

  andThen(() => {
    assert.equal(currentURL(), '/link-action');
  });

  click('a');

  andThen(() => {
    assert.equal(currentURL(), '/other-route');
  });
});

test('action parameters can be passed to invoked action', assert => {
  assert.expect(2);

  const registry = getRegistry();

  registry.register('controller:link-action', Ember.Controller.extend({
    actions: {
      testAction(param1, param2) {
        assert.equal(param1, 'value1', 'param1 has value of value1');
        assert.equal(param2, 'value2', 'param2 has value of value2');
      }
    }
  }));

  registry.register('template:link-action', precompileTemplate(`
    {{#link-to 'other-route' invokeAction=(action 'testAction' 'value1' 'value2')}}
      Link to other route
    {{/link-to}}
  `));

  visit('/link-action');

  click('a');
});
