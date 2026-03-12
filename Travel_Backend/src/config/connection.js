let { MongoClient } = require("mongodb");
require("dotenv").config();
let url = process.env.URL;

let connectDb = async() => {
    try {
        let client = await MongoClient.connect(url);
        let db = client.db("travel_db");
        console.log("Db connected");
        if(db){
            return db;
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {connectDb}