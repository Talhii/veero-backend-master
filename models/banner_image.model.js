module.exports = (sequelize, Sequelize) => {
    const Banner_image = sequelize.define("banner_image", {
      Image_Name: {
        type: Sequelize.STRING
      },
      Banner_Id: {
        type: Sequelize.INTEGER
      }
    });
  
    return Banner_image;
  };