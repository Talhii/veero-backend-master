module.exports = (sequelize, Sequelize) => {
    const Ask = sequelize.define("ask", {
      User_Id: {
        type: Sequelize.INTEGER
      },
      User_Name: {
        type: Sequelize.STRING
      },
      Product_Id: {
        type: Sequelize.INTEGER
      },
      Ask: {
        type: Sequelize.INTEGER
      },
      Product_Name: {
        type: Sequelize.STRING
      }
    });
  
    return Ask;
  };