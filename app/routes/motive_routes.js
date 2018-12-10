const Motive = require('../models/motive');
//Wrap the route in a function
module.exports = function(app, db) {

    app.get('/motive', (req, res) => {
        Motive.find(function(err, motive) {
            if (err) {
                res.send(err);
            }
            res.json(motive);
        });
    });

    app.post('/motive', (req, res) => {
        //Check if all arguments are given, if not: send 400 Bad Request
        if (req.body.name === undefined || req.body.name === null || req.body.name.length < 1) {
            res.status(400).send("Please provide name");
        } else {
            const name = req.body.name;
            const description = req.body.description;
            const killers = req.body.killers;
            Motive.findOne({name: name})
                .then((motive) => {
                    if (motive != null) {
                        res.status(409).send("Motive " + name + " already exists."); //If user exists, send 409 Conflict
                    } else {
                        //Else: Create new user, save, send 200 OK
                        motive = new Motive({name: name, description: description, killers: killers});
                        motive.save()
                            .then(() => res.status(200).send("Motive " + name + " added."));
                    }
                });
        }
    });

    app.put('/motive', (req, res) => res.send('PUT /motive'));

    app.delete('/motive', (req, res) => res.send('DELETE /motive'));
};