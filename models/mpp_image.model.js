module.exports = (sequelize, Sequelize) => {
    const Mpp_image = sequelize.define("mpp_image", {
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
  
    return Mpp_image;
  };