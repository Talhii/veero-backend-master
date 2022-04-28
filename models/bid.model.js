module.exports = (sequelize, Sequelize) => {
    const Bid = sequelize.define("bid", {
      User_Id: {
        type: Sequelize.INTEGER
      },
      User_Name: {
        type: Sequelize.STRING
      },
      Product_Id: {
        type: Sequelize.INTEGER
      },
      Bid: {
        type: Sequelize.INTEGER
      },
      Product_Name: {
        type: Sequelize.STRING
      }
    });
  
    return Bid;
  };