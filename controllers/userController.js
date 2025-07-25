const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const user = new User({
            email: req.body.email,
            password: hash
        });
        user.save()
        .then(() => res.status(201).json({ message: 'utilisateur créé' }))
        .catch(error => res.status(400).json({ error }))
    })
    .catch(error => res.status(500).json({ error }));
};

exports.signin = (req, res, next) => {
    User.findOne({ email: req.body.email })
    .then(user => {
        if (user === null)
            res.status(401).json({ message: 'Identifiant / mot de passe incorrect(s)' })
        
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            if (!valid)
                res.status(401).json({ message: 'Identifiant / mot de passe incorrect(s)' })

            res.status(200).json({ 
                userId: user._id, 
                token: jwt.sign(
                    { userId: user._id },
                    'RANDOM_SECRET_TOKEN_D4?GVFi?K#0c6jVGNi3Z6rnNoSm?Cg?J&Ou5O&zY',
                    { expiresIn: '24h' }
                )
            });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json( { error }));
};