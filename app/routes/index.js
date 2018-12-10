const killerRoutes = require('./killer_routes');
const motiveRoutes = require('./motive_routes');
const countryRoutes = require('./country_routes');

// Export the routes
module.exports = function(app, db) {
    killerRoutes(app, db);
    motiveRoutes(app, db);
    countryRoutes(app, db);
};