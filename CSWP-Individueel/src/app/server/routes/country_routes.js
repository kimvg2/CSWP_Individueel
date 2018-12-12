const Country = require('../models/country');
//Wrap the route in a function
module.exports = function(app, db) {

    app.get('/country', (req, res) => {
        Country.find(function(err, country) {
            if (err) {
                res.send(err);
            }
            res.json(country);
        });
    });

    app.post('/country', (req, res) => {
        //Check if all arguments are given, if not: send 400 Bad Request
        //name, continent, firstmurder, killers
        if (req.body.name === undefined || req.body.name === null || req.body.name.length < 1 ||
            req.body.continent === undefined || req.body.continent === null || req.body.continent.length < 1) {
            res.status(400).send("Please provide name and continent");
        } else {
            const name = req.body.name;
            const continent = req.body.continent;
            const firstmurder = req.body.firstmurder;
            const killers = req.body.killers;
            Country.findOne({name: name})
                .then((country) => {
                    if (country != null) {
                        res.status(409).send("Country " + name + " already exists."); //If user exists, send 409 Conflict
                    } else {
                        //Else: Create new user, save, send 200 OK
                        country = new Country({name: name, continent: continent, firstmurder: firstmurder, killers: killers});
                        country.save()
                            .then(() => res.status(200).send("Country " + name + " added."));
                    }
                });
        }
    });

    app.put('/country', (req, res) => res.send('PUT /country'));

    app.delete('/country', (req, res) => res.send('DELETE /country'));
};