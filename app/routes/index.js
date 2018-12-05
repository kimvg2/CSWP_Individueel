const killerRoutes = require('./killer_routes');

// Export the routes
module.exports = function(app, db) {
    killerRoutes(app, db);
    // Other route groups could go here, in the future
};