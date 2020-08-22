const express = require('express');
let routes = require('./routes');

let app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

if (process.env.NODE_ENV === 'development') {
    app.use((req, res, next) => {
        console.log(`A ${req.method} request was made to: ${req.originalUrl} at ${Date.now()}`);
        next();
    });
}

routes.init(app);

module.exports = app;
