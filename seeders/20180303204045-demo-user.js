'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkInsert('Users', [{
        first_name: 'Amir',
        last_name: 'Nasehi',
        email: 'nasehi.amir@gmial.com',
        password: '12345',
        permissionLevelId: 1
      },
     
      {
        first_name: 'Sheila',
        last_name: 'Arezo',
        email: 'sheila@SheilaArezo',
        password: 'qrstuv',
        permissionLevelId: 2
      },
      {
        first_name: 'Katy',
        last_name: 'Rose',
        email: 'katy@katyrose.com',
        password: 'wxyz',
        permissionLevelId: 3
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.*/

      return queryInterface.bulkDelete('Users', null, {});
    
  }
};
