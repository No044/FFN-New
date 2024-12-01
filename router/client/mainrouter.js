const homerouter = require("./homerouter");
const productsrouter = require("./productsrouter");
const cart = require("./cart");
const shopproducts = require("./shopproducts");
const infor = require("./chat");
const profile = require("./profile");
const pravite = require("../../middlewares/client/pravitechat");
const middledaymonyear = require("../../middlewares/client/day");
module.exports = (app) => {
  app.use(middledaymonyear);
  app.use("/", homerouter);

  app.use("/products", productsrouter);

  app.use("/shopproducts", shopproducts);

  app.use("/cart", cart);

  app.use("/chat", pravite, infor);

  app.use("/profile", pravite,profile);
};