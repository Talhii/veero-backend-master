const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.admins = require("./admin.model.js")(sequelize, Sequelize);
db.approved_orders = require("./approved_order.model.js")(sequelize, Sequelize);
db.asks = require("./ask.model.js")(sequelize, Sequelize);
db.banner_images = require("./banner_image.model.js")(sequelize, Sequelize);
db.banner_products = require("./banner_product.model.js")(sequelize, Sequelize);
db.banners = require("./banner.model.js")(sequelize, Sequelize);
db.bids = require("./bid.model.js")(sequelize, Sequelize);
db.brand_images = require("./brand_image.model.js")(sequelize, Sequelize);
db.brands = require("./brand.model.js")(sequelize, Sequelize);
db.customers = require("./customer.model.js")(sequelize, Sequelize);
db.header_images = require("./header_image.model.js")(sequelize, Sequelize);
db.most_popular_products = require("./most_popular_product.model.js")(sequelize, Sequelize);
db.mpp_images = require("./mpp_image.model.js")(sequelize, Sequelize);
db.orders = require("./order.model.js")(sequelize, Sequelize);
db.popular_images = require("./popular_image.model.js")(sequelize, Sequelize);
db.popular_products = require("./popular_product.model.js")(sequelize, Sequelize);
db.product_images = require("./product_image.model.js")(sequelize, Sequelize);
db.products = require("./product.model.js")(sequelize, Sequelize);



module.exports = db;