import Ember from 'ember';

export default Ember.Controller.extend({
  testActionFired: false,

  actions: {
    testAction() {
      this.set('testActionFired', true);
    }
  }
});
