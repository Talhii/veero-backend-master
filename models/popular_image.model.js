module.exports = (sequelize, Sequelize) => {
    const Popular_image = sequelize.define("popular_image", {
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
  
    return Popular_image;
  };