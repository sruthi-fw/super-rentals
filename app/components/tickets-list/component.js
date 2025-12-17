import Component from '@glimmer/component';
export default class TicketsListComponent extends Component {
  statusOptions = ['Open', 'Pending', 'Resolved', 'Closed'];

  priorityOptions = [
    { value: '1', label: 'Low' },
    { value: '2', label: 'Medium' },
    { value: '3', label: 'High' },
    { value: '4', label: 'Urgent' },
  ];
}
