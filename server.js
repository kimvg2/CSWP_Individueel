const express        = require('express');
const mongoose       = require('mongoose');
const bodyParser     = require('body-parser');
const db             = require('./CSWP-Individueel/src/config/db');

const app            = express();

const port = 4200;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(db.url, { useNewUrlParser: true });
mongoose.connection
    .once('open', () => {
        require('./CSWP-Individueel/src/app/server/routes')(app, {});

        app.listen(port, () => {
            console.log('App is running on port ' + port);
        });
    })
    .on('error', (error) => {
        console.warn('Warning', error);
    });

