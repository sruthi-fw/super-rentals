import Adapter from '@ember-data/adapter';

const API_URL = 'https://my-json-server.typicode.com/sruthi-fw/super-rentals';

export default class RentalAdapter extends Adapter {
  findAll() {
    return fetch(`${API_URL}/rentals`)
      .then(response => response.json());
  }

  findRecord(store, type, id) {
    return fetch(`${API_URL}/rentals/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Not found');
        }
        return response.json();
      });
  }
}
