module.exports = (sequelize, Sequelize) => {
    const Popular_product = sequelize.define("popular_product", {
      P_Name: {
        type: Sequelize.STRING
      },
      Description: {
        type: Sequelize.STRING
      },
      Brand: {
        type: Sequelize.STRING
      },
      Category_Name: {
        type: Sequelize.INTEGER
      },
      Retail: {
        type: Sequelize.INTEGER
      },
      Color: {
        type: Sequelize.STRING
      },
    });
  
    return Popular_product;
  };