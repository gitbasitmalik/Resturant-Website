import mongoose from "mongoose";

// const mdbkey = "mongodb+srv://mbasit467:basit467@malikdatabse.jki6sxr.mongodb.net/?retryWrites=true&w=majority"
mongoose.set('strictQuery',true);

mongoose.connect("mongodb+srv://mbasit467:basit467@malikdatabse.jki6sxr.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
    ).then(()=> console.log("Database Is Connected"))
    .catch(()=>console.log("Database is not connected"));