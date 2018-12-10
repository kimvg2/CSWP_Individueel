const Killer = require('../models/killer');
//Wrap the route in a function
module.exports = function(app, db) {

    app.get('/killer', (req, res) => {
        Killer.find(function(err, killer) {
            if (err) {
                res.send(err);
            }
            res.json(killer);
        });
    });

    app.post('/killer', (req, res) => {
        //Check if all arguments are given, if not: send 400 Bad Request
        if (req.body.name === undefined || req.body.name === null || req.body.name.length < 1 ||
            req.body.birthdate === undefined || req.body.birthdate === null || req.body.birthdate.length < 10 ||
            req.body.description === undefined || req.body.description === null || req.body.description.length < 1) {
            res.status(400).send("Please provide name, birthdate and description");
        } else {
            const photo = req.body.photo;
            const name = req.body.name;
            const alias = req.body.alias;
            const birthdate = req.body.birthdate;
            const birthplace = req.body.birthplace;
            const countryactive = req.body.countryactive;
            const dateactive = req.body.dateactive;
            const victimcount = req.body.victimcount;
            const victims = req.body.victims;
            const motive = req.body.motive;
            const description = req.body.description;
            const status = req.body.status;
            Killer.findOne({name: name})
                .then((killer) => {
                    if (killer != null) {
                        res.status(409).send("Killer " + name + " already exists."); //If user exists, send 409 Conflict
                    } else {
                        //Else: Create new user, save, send 200 OK
                        killer = new Killer({photo: photo, name: name, alias: alias, birthdate: birthdate,
                            birthplace: birthplace, countryactive: countryactive, dateactive: dateactive,
                            victimcount: victimcount, victims: victims, motive: motive, description: description, status: status});
                        killer.save()
                            .then(() => res.status(200).send("Killer " + name + " added."));
                    }
                });
        }
    });

    app.put('/killer', (req, res) => {
        Killer.find(function(err, killer) {
            if (err) {
                res.send(err);
            }else {
                killer.photo = req.body.photo;
                killer.name = req.body.name;
                killer.alias = req.body.alias;
                killer.birthdate = req.body.birthdate;
                killer.birthplace = req.body.birthplace;
                killer.countryactive = req.body.countryactive;
                killer.dateactive = req.body.dateactive;
                killer.victimcount = req.body.victimcount;
                killer.victims = req.body.victims;
                killer.motive = req.body.motive;
                killer.description = req.body.description;
                killer.status = req.body.status;

                killer.save()
                    .then(() => res.status(200).send("Killer " + name + " updated."));
            }
        });
    });

    app.delete('/killer', (req, res) => res.send('DELETE /killer'));
};