/* eslint-disable qunit/require-expect */
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import Service from '@ember/service';
import page from '../../pages/listings';

module('Integration | Route | listings', function (hooks) {
  setupApplicationTest(hooks);

  test('it renders rental listings', async function (assert) {
    const fakeRentals = [
      {
        id: 'grand-old-mansion',
        title: 'Grand Old Mansion',
        owner: 'Veruca Salt',
        city: 'San Francisco',
        bedrooms: 15,
        image: '/assets/images/kitchen.png',
      },
      {
        id: 'urban-living',
        title: 'Urban Living',
        owner: 'Mike',
        city: 'Seattle',
        bedrooms: 1,
        image: '/assets/images/bedroom.png',
      },
    ];

    this.owner.register(
      'service:store',
      class extends Service {
        findAll(modelName) {
          assert.equal(modelName, 'rental', 'findAll called for rental');
          return Promise.resolve(fakeRentals);
        }
      }
    );

    await page.visit();

    assert.equal(page.heading, 'Rental Listings', 'page heading is correct');
    assert.equal(page.rentalCount, 2, 'two rentals rendered');

    const titles = page.rentalTitles.map((rental) => rental.title);
    assert.deepEqual(titles, ['Grand Old Mansion', 'Urban Living']);
  });
});
