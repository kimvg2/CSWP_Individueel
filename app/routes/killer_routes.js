//Wrap the route in a function
module.exports = function(app, db) {

    app.get('/killers', (req, res) => res.send('GET /killers'));

    app.get('/killer', (req, res) => {
        Killer.find({})
            .then((killers) => {
                res.status(200).json(killers);
            })
    })
    //Create route
    app.post('/killers', (req, res) => {
        // create it here
        const killer = {photo: req.body.photo, name: req.body.name, alias: req.body.alias, birthdate: req.body.birthdate, birthplace: req.body.birthplace, countryactive: req.body.countryactive, dateactive: req.body.dateactive, victimcount: req.body.victimcount, victims: req.body.victims, motive: req.body.motive, description: req.body.description, status: req.body.status};
        db.collection('killers').insert(killer, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });
};