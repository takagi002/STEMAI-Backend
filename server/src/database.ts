const mongoose = require("mongoose");

 
 
export async function connectToDatabase() {
    const uri = process.env.DEV_URI;

    try {
       await mongoose.connect(uri,
        {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        }
);
    } catch (error) {
        console.log(error);
    }
}