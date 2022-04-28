module.exports = (sequelize, Sequelize) => {
    const Banner = sequelize.define("banner", {
      Heading: {
        type: Sequelize.STRING
      },
      Banner_Description: {
        type: Sequelize.STRING
      }
    });
  
    return Banner;
  };