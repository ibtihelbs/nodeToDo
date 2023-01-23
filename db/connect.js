const mongoose = require('mongoose');


const connectionDB=(url)=>{
    mongoose.connect(url,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        })
}
 


module.exports = connectionDB    
/***connection_DB */