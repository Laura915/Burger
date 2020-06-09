//Express server
const express= require('express');
const PORT=process.env.PORT || 8080;
const app = express();

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes and give the server access to them.
var routes = require('./controllers/burgers_controller.js');

app.use(routes);

app.listen(PORT, () =>{
    console.log("Server listening on: http://localhost:"+ PORT);
});