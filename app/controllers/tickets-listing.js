import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TicketsListingController extends Controller {
  @tracked query = '';
  @tracked status = '';
  @tracked priority = '';

  get statusOptions() {
    return ['', 'Open', 'Pending', 'Resolved', 'Closed'];
  }

  get priorityOptions() {
    return ['', 'Low', 'Medium', 'High', 'Urgent'];
  }

  @action
  updateQuery(event) {
    this.query = event.target ? event.target.value : event;
  }

  @action
  updateStatus(value) {
    this.status = value;
  }

  @action
  updatePriority(value) {
    this.priority = value;
  }

  @action
  resetFilters() {
    this.query = '';
    this.status = '';
    this.priority = '';
  }
}
