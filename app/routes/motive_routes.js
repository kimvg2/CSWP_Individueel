const Motive = require('../models/motive');
//Wrap the route in a function
module.exports = function(app, db) {

    app.get('/motive', (req, res) => res.send('GET /motive'));

    app.post('/motive', (req, res) => res.send('POST /motive'));

    app.put('/motive', (req, res) => res.send('PUT /motive'));

    app.delete('/motive', (req, res) => res.send('DELETE /motive'));
};