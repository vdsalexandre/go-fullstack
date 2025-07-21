const express = require('express');

const app = express();

app.use(express.json()); // permet d'extraire le corps JSON de la requête POST

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-type, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
	next();
});

app.post('/api/stuff', (req, res, next) => {
	console.log(req.body); // corps JSON de la requête POST
	res.status(201).json({
		message: 'object created'
	})
});

app.get('/api/stuff', (req, res, next) => {
	const stuff = [
		{
			_id: 'oeihfzeoi',
			title: 'Mon premier objet',
			description: 'Les infos de mon premier objet',
			imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
			price: 4900,
			userId: 'qsomihvqios',
		},
		{
			_id: 'oeihfzeomoihi',
			title: 'Mon deuxième objet',
			description: 'Les infos de mon deuxième objet',
			imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
			price: 2900,
			userId: 'qsomihvqios',
		},
	];
	res.status(200).json(stuff);
});

module.exports = app;