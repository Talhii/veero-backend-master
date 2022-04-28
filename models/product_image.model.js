module.exports = (sequelize, Sequelize) => {
    const Product_Image = sequelize.define("product_Image", {
      Image_Name: {
        type: Sequelize.STRING
      },
      Product_Id: {
        type: Sequelize.INTEGER
      },
      Brand: {
        type: Sequelize.STRING
      }
    });
  
    return Product_Image;
  };