const express = require('express');
let routes = require('./routes');

let app = express();

// Add middleware for logging all requests. For development only!
if (process.env.NODE_ENV !== 'development') {
    app.use((req, res, next) => {
        console.log(`A ${req.method} request was made to: ${req.originalUrl} at ${Date.now()}`);
        next();
    });
}

// Add middleware to parse the json
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// Set up routes
routes.init(app);

module.exports = app;
