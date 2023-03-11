const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

//get route
const route = require("./routes");
// HTTP Logger
app.use(morgan("combined"));

//Templates engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

//static files
app.use(express.static(path.join(__dirname, "public")));

//apply middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
