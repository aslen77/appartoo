const express = require('express');
var ObjectId = require('mongoose').Types.ObjectId;
var router = express.Router();
var { User } = require('../models/user');

router.get('/', (req,res)=> {
    User.find((err,docs) => { 
        if (!err) {res.send(docs);}
        else 
        {
            console.log('erreur recuperation utilisateurs :' +JSON.stringify(err, undefined , 2));
        }
    });
});

router.get('/:id', (req,res)=> {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send('pas d enregistrement avec cet id : ${req.params.id}');
   
   
    User.findById(req.params.id, (err, doc)=> {
        if(!err) {res.send(doc); }
        else {
            console.log('pas de utilisateur retrouve : ' + JSON.stringify(err, undefined, 2));
        }
    });

});

router.post('/',(req,res) => {
    var user = new User ({
        email : req.body.email, 
        password : req.body.password,
    });
    user.save((err,doc)=> {
        if (!err) { res.send(doc);}
        else {
            console.log('erreur de enregistrement de utilisateur : ' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.delete('/:id', (req,res)=> {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send('pas d enregistrement avec cet id : ${req.params.id}');

    User.findByIdAndRemove(req.params.id, (err,doc) => { 
        if (!err) {res,send(doc);}
        else {console.log('Erreur de suppression du pangolin: '+ JSON.stringify(err, undefined, 2)); }
    });

});



module.exports = router;