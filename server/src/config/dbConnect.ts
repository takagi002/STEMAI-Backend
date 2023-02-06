var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const DEV_URI = process.env.DEV_URI;
 
 
 function devDBConnect() {
    mongoose.connect(DEV_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
        }
    );
    return mongoose.connection;
}
function dbClose(){
    mongoose.disconnect();
}

module.exports = {devDBConnect, dbClose};