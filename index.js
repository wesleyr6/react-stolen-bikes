const express = require("express");
const secure = require("ssl-express-www");
const compression = require("compression");

const port = process.env.PORT || 4000;
const app = express();

app.use(express.static(`${__dirname}/build`));
app.use(secure);
app.use(compression());

app.listen(port, () => {
  console.log(`Application is running...`);
});
