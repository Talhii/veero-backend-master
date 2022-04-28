module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("order", {
      Buyer_Id: {
        type: Sequelize.INTEGER
      },
      Buyer_Name: {
        type: Sequelize.STRING
      },
      Seller_Id: {
        type: Sequelize.INTEGER
      },
      Seller_Name: {
        type: Sequelize.STRING
      },
      Price: {
        type: Sequelize.INTEGER
      },
      Product_Id: {
        type: Sequelize.INTEGER
      },
      Product_Name: {
        type: Sequelize.STRING
      }
    });
  
    return Order;
  };