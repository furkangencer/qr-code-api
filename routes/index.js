const { qrRouter } = require('./qr');

/**
 * Registers /qr route
 * @param app Express App
 */
const init = (app) => {
    // Register route
    app.use('/', qrRouter);

    // Throw 404 if URL not found
    app.all("*", function(req, res) {
        return res.status(404).json({
            'code': 404,
            'msg': 'Not found'
        });
    });
}
module.exports = {
    init
};
