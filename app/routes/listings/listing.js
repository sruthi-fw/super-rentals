import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ListingRoute extends Route {
  @service store;

  model(params) {
    return this.store.findRecord('rental', params.listingId);
  }
}
