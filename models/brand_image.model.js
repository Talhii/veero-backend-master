module.exports = (sequelize, Sequelize) => {
    const Brand_image = sequelize.define("brand_image", {
      Image_Name: {
        type: Sequelize.STRING
      },
      Brand: {
        type: Sequelize.STRING
      }
    });
  
    return Brand_image;
  };