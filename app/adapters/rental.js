import Adapter from '@ember-data/adapter';
import { RENTALS } from '../services/store';

export default class RentalAdapter extends Adapter {
  findAll() {
    return Promise.resolve(RENTALS);
  }

  findRecord(store, type, id) {
    const rental = RENTALS.find(r => r.id === id);
    return rental ? Promise.resolve(rental) : Promise.reject(new Error('Not found'));
  }
}
