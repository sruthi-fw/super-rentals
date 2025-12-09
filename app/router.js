import EmberRouter from '@ember/routing/router';
import config from 'super-rentals/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('listings', function () {
    this.route('listing', { path: '/:listingId' });
    this.route('index', { path: '/' });
  });
  this.route('contact', { path: '/getting-in-touch' });
  this.route('not-found', { path: '/*path' });
});
