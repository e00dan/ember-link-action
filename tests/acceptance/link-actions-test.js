import Controller from '@ember/controller';
import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

function cleanRegister(context, name, value) {
  if (typeof(context) === 'string') {
    throw 'You need to use test context as the first property instead of string for cleanRegister.';
  }

  const { application } = context.owner || context;

  application.unregister(name);

  application.register(name, value);
}

module('Acceptance | link actions test', function(hooks) {
  setupApplicationTest(hooks);

  test('clicking {{link-to}} with closure action specified correctly transition to other route and triggers an action', async function(assert) {
    assert.expect(3);

    cleanRegister(this, 'controller:link-action', Controller.extend({
      actions: {
        testAction() {
          assert.ok('Test action fired.');
        }
      }
    }));

    cleanRegister(this, 'template:link-action', hbs`
      {{#link-to 'other-route' invokeAction=(action 'testAction')}}
        Link to other route
      {{/link-to}}
    `);

    await visit('/link-action');

    assert.equal(currentURL(), '/link-action');

    await click('a');

    assert.equal(currentURL(), '/other-route');
  });

  test('action parameters can be passed to invoked action', async function(assert) {
    assert.expect(2);

    cleanRegister(this, 'controller:link-action', Controller.extend({
      actions: {
        testAction(param1, param2) {
          assert.equal(param1, 'value1', 'param1 has value of value1');
          assert.equal(param2, 'value2', 'param2 has value of value2');
        }
      }
    }));

    cleanRegister(this, 'template:link-action', hbs`
      {{#link-to 'other-route' invokeAction=(action 'testAction' 'value1' 'value2')}}
        Link to other route
      {{/link-to}}
    `);

    await visit('/link-action');

    await click('a');
  });
});
