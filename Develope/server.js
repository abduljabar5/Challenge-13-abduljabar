const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3009;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
console.log("ko");
// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
