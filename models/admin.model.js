module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define("admin", {
      Admin_Name: {
        type: Sequelize.STRING
      },
      Admin_Email: {
        type: Sequelize.STRING
      },
      Admin_Password: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Admin;
  };