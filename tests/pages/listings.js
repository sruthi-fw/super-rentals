import {
  create,
  text,
  count,
  collection,
  clickable,
  visitable,
} from 'ember-cli-page-object';

const pageObj = create({
  visit: visitable('/listings'),
  heading: text('h2'),
  rentalCount: count('.rental'),
  rentalTitles: collection('.rental', {
    title: text('h3 a'),
  }),
  rentals: collection('.rental', {
    title: text('h3 a'),
    owner: text('.detail:nth-of-type(1)'),
    city: text('.detail:nth-of-type(2)'),
    bedrooms: text('.detail:nth-of-type(3)'),
    wishlistButton: clickable('.button'),
  }),
});

export default pageObj;
