// import all the functions
let express = require("express");
let app = express();
let cors = require("cors");
let bodyParser = require("body-parser");
let mongoClient = require("mongodb").MongoClient;
let PORT = 3001;
let dbURL = "mongodb://localhost:27017";
// start the server 
app.listen(PORT, () => console.log(`Server is running in ${PORT}`));

// apply the middleware
app.use(cors());
app.use(bodyParser.json());

//create the services for contact app
//storing the profile 
//login service
app.get("/profile/:username/:password", (request, response) => { 
    let user = request.params.username
    let pass = request.params.password;
    mongoClient.connect(dbURL, {useNewUrlParser:true}, (error, client) => {
        if(error) {
            throw error;
        } else {
            let db = client.db("profile");
            db.collection("admin").findOne({username:user, password: pass})
            .then((doc) => {
                if(doc.length != 0) {
                    response.json(doc)
                } else {
                    response.status(404).json({"message":`Sorry username or password is wrong`})
                }
                client.close();
            });
        }
    });
});