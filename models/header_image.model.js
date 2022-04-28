module.exports = (sequelize, Sequelize) => {
    const Header_image = sequelize.define("header_image", {
      Image_Name: {
        type: Sequelize.STRING
      },
      Product_Name: {
        type: Sequelize.STRING
      }
    });
  
    return Header_image;
  };