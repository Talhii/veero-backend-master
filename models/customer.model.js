module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customer", {
      First_Name: {
        type: Sequelize.STRING
      },
      Last_Name: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      User_Password: {
        type: Sequelize.STRING
      },
      Status: {
        type: Sequelize.STRING
      }
    });
  
    return Customer;
  };