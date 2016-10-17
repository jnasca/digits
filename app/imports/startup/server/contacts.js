import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';


const contactsSeeds = [
  { first: 'Joseph', last: 'Nasca',  address: '2555 Dole St., Honolulu, HI', telephone: '808-956-6100', email: 'nasca@hawaii.edu',},
  { first: 'Joseph', last: 'Nasca',  address: '2555 Dole St., Honolulu, HI', telephone: '808-956-6100', email: 'nasca@hawaii.edu',},
  { first: 'Joseph', last: 'Nasca',  address: '2555 Dole St., Honolulu, HI', telephone: '808-956-6100', email: 'nasca@hawaii.edu',},
];

if (Contacts.find().count() === 0) {
  _.each(contactsSeeds, function seedContacts(contact) {
    Contacts.insert(contact);
  });
}
