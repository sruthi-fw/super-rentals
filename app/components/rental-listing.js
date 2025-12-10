import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class RentalListingComponent extends Component {
  @service store;
  @action
  async handleWishlist(data) {
    let updatedRecord = await this.store.peekRecord('rental', data.id);
    if (updatedRecord) {
      updatedRecord.set('isWishlisted', !updatedRecord.isWishlisted);

      try {
        await updatedRecord.save();
        console.log('Record updated successfully.');
      } catch (error) {
        console.error('Update failed:', error);
      }
    }
    alert(
      `${!updatedRecord.isWishlisted ? 'Removed' : 'Added'} ${
        this.args.rental.title
      } ${!updatedRecord.isWishlisted ? 'from' : 'to'} your wishlist!`
    );
  }
}
