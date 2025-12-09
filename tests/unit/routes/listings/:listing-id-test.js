import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | listings/:listing-id', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:listings/:listing-id');
    assert.ok(route);
  });
});
