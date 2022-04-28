module.exports = (sequelize, Sequelize) => {
    const Brands = sequelize.define("brand", {
      Brand_Name: {
        type: Sequelize.STRING
      },
      Brand_Descriptin: {
        type: Sequelize.STRING
      }
    });
  
    return Brands;
  };