var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080

app.get("/", function(req, res) {

})

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
 
var apiRoutes = require("./routes/apiRoutes")(app);
var htmlRoutes = require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
});