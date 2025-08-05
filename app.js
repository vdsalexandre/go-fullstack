const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('config');
const mongodbConnexionUrl = config.get('mongodb.dbconfig.url');
const path = require('path');

const stuffRoutes = require('./routes/stuffRoute');
const userRoutes = require('./routes/userRoute');

mongoose.connect(mongodbConnexionUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.error('Connexion à MongoDB échouée ...'));

const app = express();

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-type, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
	next();
});

app.use(bodyParser.json());

app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;