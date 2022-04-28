module.exports = (sequelize, Sequelize) => {
    const Banner_product = sequelize.define("banner_product", {
      P_Name: {
        type: Sequelize.STRING
      },
      Price: {
        type: Sequelize.INTEGER
      },
      Retail_Price: {
        type: Sequelize.INTEGER
      },
      P_Condition: {
        type: Sequelize.STRING
      },
      Description: {
        type: Sequelize.STRING
      },
      Brand: {
        type: Sequelize.STRING
      },
      Verification: {
        type: Sequelize.STRING
      },
      Banner_Id: {
        type: Sequelize.INTEGER
      },
      Lowest_Ask: {
        type: Sequelize.INTEGER
      },
      Lowest_Bid: {
        type: Sequelize.INTEGER
      }
    });
  
    return Banner_product;
  };