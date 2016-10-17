import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Contacts = new Mongo.Collection('Contacts');

export const ContactsSchema = new SimpleSchema({
  first: {
    label: 'First',
    type: String,
    optional: false,
    max: 20,
  },
  last: {
    label: 'Last',
    type: String,
    optional: false,
    max: 20,
  },
  address: {
    label: 'Address',
    type: String,
    optional: false,
    max: 100,
  },
  telephone: {
    label: 'Telephone',
    type: String,
    optional: false,
    max: 20,
  },
  email: {
    label: 'Email',
    type: String,
    optional: false,
    max: 50,
  },
});

Contacts.attachSchema(ContactsSchema);
