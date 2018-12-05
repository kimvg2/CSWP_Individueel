// Wrap the route in a function
module.exports = function(app, db) {
    // Create route
    app.post('/killers', (req, res) => {
        // create it here
        console.log(req.body);
        res.send('Hello');
    });
};