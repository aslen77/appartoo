const mongoose = require('mongoose'); 

var Pangolin = mongoose.model('Pangolin', { 
   age : { type: Number },
   famille : { type: String },
   race : { type: String },
   nourriture : { type: String }
}, 'pang');
 
module.exports = {Pangolin} ;