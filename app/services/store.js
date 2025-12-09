import { service } from '@ember/service';
import Store from 'ember-data/store';

export default class CustomStoreService extends Store {
  // Ember Data store - the store property in services/store.js
}

// Mock rental data
export const RENTALS = [
  {
    id: '1',
    title: 'Spacious Condo',
    owner: 'John Doe',
    city: 'Seattle',
    bedrooms: 3,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=350&fit=crop',
    description: 'A beautiful spacious condo with modern amenities in the heart of Seattle.'
  },
  {
    id: '2',
    title: 'Cozy Apartment',
    owner: 'Jane Smith',
    city: 'Portland',
    bedrooms: 2,
    image: 'https://images.unsplash.com/photo-1505873242700-f289a29e7e0f?w=500&h=350&fit=crop',
    description: 'A cozy apartment perfect for couples or small families in Portland.'
  },
  {
    id: '3',
    title: 'Mountain Cabin',
    owner: 'Bob Johnson',
    city: 'Denver',
    bedrooms: 4,
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=350&fit=crop',
    description: 'A stunning mountain cabin with breathtaking views in Denver.'
  }
];
