import Model, { attr } from '@ember-data/model';

export default class Rental extends Model {
  @attr title;
  @attr owner;
  @attr city;
  @attr bedrooms;
  @attr image;
  @attr description;
}
