const express = require('express');

var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId; 
var { Pangolin } = require('../models/pangolin');


router.get('/', (req,res)=> {
    Pangolin.find((err,docs) => { 
        if (!err) {res.send(docs);}
        else 
        {
            console.log('erreur recuperation pangolins :' +JSON.stringify(err, undefined , 2));
        }
    });
});

router.get('/:id', (req,res)=> {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send('pas d enregistrement avec cet id : ${req.params.id}');
   
   
    Pangolin.findById(req.params.id, (err, doc)=> {
        if(!err) {res.send(doc); }
        else {
            console.log('pas de pangolin retrouve : ' + JSON.stringify(err, undefined, 2));
        }
    });

});

router.post('/',(req,res) => {
    var pang = new Pangolin ({
        age : req.body.age, 
        famille : req.body.famille,
        race : req.body.race,
        nourriture : req.body.nourriture,
    });
    pang.save((err,doc)=> {
        if (!err) { res.send(doc);}
        else {
            console.log('erreur de enregistrement de pangolin : ' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.put('/:id', (req,res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send('pas d enregistrement avec cet id : ${req.params.id}');
    var pang = new Pangolin ({
        age : req.body.age, 
        famille : req.body.famille,
        race : req.body.race,
        nourriture : req.body.nourriture,
    });

    Pangolin.findByIdAndUpdate(req.params.id, { $set: pang}, { new: true  }, (err,doc) => { 
        if (!err) { res.send(doc);}
        else {
            console.log('erreur de mise a jour de pangolin : ' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.delete('/:id', (req,res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send('pas d enregistrement avec cet id : ${req.params.id}');

    Pangolin.findByIdAndRemove(req.params.id, (err,doc) => {
        if (!err) { res.send(doc);}
        else {
            console.log('erreur de suppression de pangolin : ' + JSON.stringify(err, undefined, 2));
        }
    });
});

module.exports = router;