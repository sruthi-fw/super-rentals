import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import Service from '@ember/service';
import page from '../pages/listings';

module('Acceptance | wishlist', function (hooks) {
  setupApplicationTest(hooks);

  test('clicking wishlist toggles and shows alert', async function (assert) {
    assert.expect(9);

    const fakeRentals = [
      {
        id: 'grand-old-mansion',
        title: 'Grand Old Mansion',
        owner: 'Veruca Salt',
        city: 'San Francisco',
        bedrooms: 15,
        image: '/assets/images/kitchen.png',
        isWishlisted: false,
      },
    ];

    fakeRentals.forEach((rental) => {
      rental.set = function (prop, val) {
        this[prop] = val;
      };
      rental.save = function () {
        this.__saved = true;
        return Promise.resolve(this);
      };
    });

    this.owner.register(
      'service:store',
      class extends Service {
        findAll(modelName) {
          assert.equal(modelName, 'rental', 'findAll called for rental');
          return Promise.resolve(fakeRentals);
        }

        peekRecord(modelName, id) {
          assert.equal(modelName, 'rental', 'peekRecord called for rental');
          return fakeRentals.find((r) => r.id === id);
        }
      }
    );

    let alerted = null;
    const originalAlert = window.alert;
    window.alert = (msg) => {
      alerted = msg;
    };

    await page.visit();

    assert.equal(page.heading, 'Rental Listings', 'page heading is correct');
    assert.equal(page.rentalCount, 1, 'one rental displayed');

    const rentalToClick = page.rentals.objectAt(0);
    await rentalToClick.wishlistButton();

    assert.ok(
      alerted.includes('Added Grand Old Mansion to your wishlist!'),
      'alert shown with added message'
    );
    assert.ok(fakeRentals[0].__saved, 'record.save was called on the rental');

    await rentalToClick.wishlistButton();

    window.alert = originalAlert;
    assert.ok(
      alerted.includes('Removed Grand Old Mansion from your wishlist!'),
      'alert shown with removed message'
    );
    assert.ok(fakeRentals[0].__saved, 'record.save was called on the rental');
  });

  test('displays rental details correctly', async function (assert) {
    const fakeRentals = [
      {
        id: 'grand-old-mansion',
        title: 'Grand Old Mansion',
        owner: 'Veruca Salt',
        city: 'San Francisco',
        bedrooms: 15,
        image: '/assets/images/kitchen.png',
        isWishlisted: false,
      },
      {
        id: 'urban-living',
        title: 'Urban Living',
        owner: 'Mike',
        city: 'Seattle',
        bedrooms: 1,
        image: '/assets/images/bedroom.png',
        isWishlisted: false,
      },
    ];

    fakeRentals.forEach((rental) => {
      rental.set = function (prop, val) {
        this[prop] = val;
      };
      rental.save = function () {
        return Promise.resolve(this);
      };
    });

    this.owner.register(
      'service:store',
      class extends Service {
        findAll() {
          return Promise.resolve(fakeRentals);
        }

        peekRecord(modelName, id) {
          return fakeRentals.find((r) => r.id === id);
        }
      }
    );

    window.alert = () => {}; // stub alert to avoid test interruption

    await page.visit();

    assert.equal(page.rentalCount, 2, 'two rentals displayed');

    const titles = page.rentalTitles.map((rental) => rental.title);
    assert.deepEqual(
      titles,
      ['Grand Old Mansion', 'Urban Living'],
      'rental titles are correct'
    );

    const mansionRental = page.rentals.filterBy(
      'title',
      'Grand Old Mansion'
    )[0];
    assert.ok(mansionRental, 'mansion rental found');
    assert.equal(
      mansionRental.owner,
      'Owner: Veruca Salt',
      'owner detail is correct'
    );
    assert.equal(
      mansionRental.city,
      'City: San Francisco',
      'city detail is correct'
    );
    assert.equal(
      mansionRental.bedrooms,
      'Bedrooms: 15',
      'bedroom count is correct'
    );

    const urbanRental = page.rentals.filterBy('title', 'Urban Living')[0];
    assert.ok(urbanRental, 'urban rental found');
    assert.equal(
      urbanRental.owner,
      'Owner: Mike',
      'owner detail is correct for second rental'
    );
    assert.equal(
      urbanRental.city,
      'City: Seattle',
      'city detail is correct for second rental'
    );
    assert.equal(
      urbanRental.bedrooms,
      'Bedrooms: 1',
      'bedroom count is correct for second rental'
    );
  });
});
