module.exports = (sequelize, Sequelize) => {
    const Most_popular_product = sequelize.define("most_popular_product", {
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
      Lowest_Ask: {
        type: Sequelize.INTEGER
      },
      Lowest_Bid: {
        type: Sequelize.INTEGER
      }
    });
  
    return Most_popular_product;
  };