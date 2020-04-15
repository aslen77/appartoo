const mongoose = require('mongoose');

var MONGO_URI = 'mongodb://localhost:27017/TestDB';

// mongoose.connect('mongodb://localhost:27017/TestDB', {useNewUrlParser: true});

mongoose.connect('mongodb://localhost:27017/TestDB',(err)=>{
    if(!err)
        console.log('MongoDb connexion reussite ... ');
        else
            console.log('Erreur de connexion MongoDB : ' + JSON.stringify(err, undefined, 2))
   
});

module.exports = mongoose;