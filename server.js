// Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.  "https://expressjs.com"
const express = require("express");

// Object Data Modeling (ODM) library for MongoDB and Node.js
const mongoose = require("mongoose");

// Routing refers to how an application’s endpoints (URIs) respond to client requests
const routes = require("./routes");

// passing and instance of the module express to the const app
const app = express();

// const PORT gets whatever is in the environment variable PORT, or 3000 if there's nothing there.
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooksDB",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
