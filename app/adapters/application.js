import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = 'https://my-json-server.typicode.com/sruthi-fw/super-rentals';
}
