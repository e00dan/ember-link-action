import Ember from 'ember';
//import { initialize } from '../../../initializers/allow-link-action';
import { module, test } from 'qunit';

let registry, application;

module('Unit | Initializer | allow link action', {
  beforeEach() {
    Ember.run(() => {
      application = Ember.Application.create();
      registry    = application.registry;

      application.deferReadiness();
    });
  }
});

test('it works', assert => {
  assert.expect(2);

  //const done = assert.async();

  const oldLinkTo = Ember.LinkComponent.create();

  assert.equal(
    oldLinkTo.willDestroyElement.name,
    'K',
    'will destroy element hook is not yet overriden'
  );

  assert.equal(
    oldLinkTo._sendInvokeAction,
    undefined,
    '_sendInvokeAction should not be defined yet'
  );

  //initialize(registry, application);

  // window.setTimeout(() => {
  //   console.log('inside window set timeout');
  //   initialize(registry, application);
  //
  //   const newLinkTo = Ember.LinkComponent.create();
  //
  //   assert.equal(
  //     newLinkTo.willDestroyElement.name,
  //     'willDestroyElement',
  //     'will destroy element hook is overriden'
  //   );
  //
  //   assert.ok(
  //     newLinkTo._sendInvokeAction,
  //     '_sendInvokeAction should be defined now'
  //   );
  //
  //   done();
  // }, 3000);
});
