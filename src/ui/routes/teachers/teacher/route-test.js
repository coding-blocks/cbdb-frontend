import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | teachers/teacher', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:teachers/teacher');
    assert.ok(route);
  });
});
