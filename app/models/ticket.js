import Model, { attr } from '@ember-data/model';

export default class TicketModel extends Model {
  @attr subject;
  @attr requester;
  @attr ticket_status;
  @attr state;
  @attr priority;
  @attr created_at;
}
