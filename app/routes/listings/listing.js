import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ListingRoute extends Route {
  @service store;

  model(params) {
    const rec = this.store.peekRecord('rental', params.listingId);
    if (rec) {
      return rec;
    }

    return this.store.findRecord('rental', params.listingId);
  }
}
