const express        = require('express');
const mongoose       = require('mongoose');
const bodyParser     = require('body-parser');
const db             = require('./config/db');

const app            = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(db.url, { useNewUrlParser: true });
mongoose.connection
    .once('open', () => {
        require('./app/routes')(app, {});

        app.listen(port, () => {
            console.log('App is running on port ' + port);
        });
    })
    .on('error', (error) => {
        console.warn('Warning', error);
    });

