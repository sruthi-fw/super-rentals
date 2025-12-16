import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class TicketsListPaginationComponent extends Component {
  get totalPages() {
    const total = Number(this.args.total || 0);
    const size = Number(this.args.pageSize || 6);
    return Math.max(1, Math.ceil(total / size));
  }

  get isFirst() {
    return Number(this.args.page || 1) <= 1;
  }

  get isLast() {
    return Number(this.args.page || 1) >= this.totalPages;
  }

  @action
  prev() {
    if (this.args.onPageChange) {
      this.args.onPageChange(Math.max(1, Number(this.args.page || 1) - 1));
    }
  }

  @action
  next() {
    if (this.args.onPageChange) {
      this.args.onPageChange(Math.min(this.totalPages, Number(this.args.page || 1) + 1));
    }
  }

  @action
  goto(page) {
    if (this.args.onPageChange) {
      this.args.onPageChange(page);
    }
  }
}
