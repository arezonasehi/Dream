'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert('sendMessage', [{
        name: 'amir nasehi',
        email: 'nasehi.amir@gmail.com',
        message: 'hi there , i was wondering if you could call me back',
        userID: 1,
      },
      {
        name: 'sheila nasehi',
        email: 'nasehi.arezo@gmail.com',
        message: 'lkgnslndg sdgknsdlkng sgnsdogi sngdnfol',
        userID: 2,
      },
     
      {
        name: 'korosh nasehi',
        email: 'nasehi.korosh@gmail.com',
        message: 'askfnasogifs asklfjaspf osjfoiso',
        userID: 3,
      },
      

      

      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkDelete('Ingredients', null, {});
  }
};
