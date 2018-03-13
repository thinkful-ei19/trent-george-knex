'use strict';

const { DATABASE } = require('./config');
const knex = require('knex')(DATABASE);

// clear the console before each run
process.stdout.write('\x1Bc');

// Sample select 
// knex
//   .select()
//   .from('restaurants')
//   .debug(true)
//   .then(results => console.log(results));

// knex
//   .select()
//   .from('restaurants')
//   .where('cuisine', 'Italian')
//   .debug(true)
//   .then(results => console.log(results));

// knex
//   .select()
//   .from('restaurants')
//   .where('cuisine', 'Italian')
//   .limit(10)
//   .debug(true)
//   .then(results => console.log(results));

// knex
//   .select()
//   .from('restaurants')
//   .count()
//   .where('cuisine', 'Thai')
//   .debug(true)
//   .then(results => console.log(results));

// knex
//   .select()
//   .from('restaurants')
//   .count()
//   .debug(true)
//   .then(results => console.log(results));

// knex
//   .select()
//   .from('restaurants')
//   .count()
//   .where('cuisine', 'Thai')
//   .andWhere('address_zipcode','11372')
//   .debug(true)
//   .then(results => console.log(results));

// knex
//   .select('id', 'name')
//   .from('restaurants')
//   .whereIn('address_zipcode', ['10012','10013','10014'])
//   .orderBy('name', 'asc')
//   .limit(5)
//   .debug(true)
//   .then(results => console.log(results));


// knex
//   .select('id', 'name')
//   .from('restaurants')
//   .insert({
//     name: 'Byte Cafe',
//     borough: 'Brooklyn',
//     cuisine: 'coffee',
//     address_building_number: '123',
//     address_street: 'Atlantic avenue',
//     address_zipcode: '11231'
//   })
//   .debug(true)
//   .then(results => console.log(results));

// knex
//   .select('id', 'name')
//   .from('restaurants')
//   .returning(['id', 'name'])
//   .insert({
//     name: 'Byte Cafe',
//     borough: 'Brooklyn',
//     cuisine: 'coffee',
//     address_building_number: '123',
//     address_street: 'Atlantic avenue',
//     address_zipcode: '11231'
//   })
//   .debug(true)
//   .then(results => console.log(results));

// knex
//   .select('id', 'name')
//   .from('restaurants')
//   .returning(['id', 'name'])
//   .insert([{
//     name: 'Byte Cafe',
//     borough: 'Brooklyn',
//     cuisine: 'coffee',
//     address_building_number: '123',
//     address_street: 'Atlantic avenue',
//     address_zipcode: '11231'
//   },
//   {
//     name: 'Byte Cafe2',
//     borough: 'Brooklyn',
//     cuisine: 'coffee',
//     address_building_number: '123',
//     address_street: 'Atlantic avenue',
//     address_zipcode: '11231'
//   },
//   {
//     name: 'Byte Cafe3',
//     borough: 'Brooklyn',
//     cuisine: 'coffee',
//     address_building_number: '123',
//     address_street: 'Atlantic avenue',
//     address_zipcode: '11231'
//   }])
//   .debug(true)
//   .then(results => console.log(results));

// knex
//   .select()
//   .from('restaurants')
//   .returning(['id', 'name'])
//   .where('nyc_restaurant_id', '30191841')
//   .update({
//     name: 'DJ Reynolds Pub and Restaurant'
//   })
//   .debug(true)
//   .then(results => console.log(results));


// knex
//   .select()
//   .from('grades')
//   .where('id', 10)
//   .del()
//   .debug(true)
//   .then(results => console.log(results));




// knex
//   .select()
//   .from('restaurants')
//   .where('id', 22)
//   .del()
//   .debug(true)
//   .then(results => console.log(results));


// Destroy the connection pool
knex.destroy().then(() => {
  console.log('database connection closed');
});