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

//create the services for app
//storing the profile 
//login service
app.post("/profile/emp/store",(req,response) =>{
    let empDoc = req.body
    //connect url, parser, callbacks 
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error,client) =>{
        if(error)
            throw error;
            //connect to the mydb instance
            let db = client.db("profile");
            //user the collection "EMPLOYEE" to insert the document 
            db.collection("emp").insertOne(empDoc,(err,res) =>{
                if(err){
                res.status(409).json(`player with an id ${empDoc._id} doenst exist !`)
                }
                response.status(201).json(res);
                client.close();
            })
    })
})
app.get("/profile/:username/:password", (req, res) => {
    let user = req.params.username
    let pass = req.params.password;
    mongoClient.connect(dbURL, { useNewUrlParser: true }, (error, client) => {
        if (error) {
            throw error;
        } else {
            let db = client.db("profile");
            db.collection("admin").findOne({ username: user, password: pass })
                .then((doc) => {
                    if (doc!=null) {
                        res.status(200).json({ "message": `Loggged IN ` })
                    } else {
                        res.status(404).json({ "message": `Sorry username or password is wrong` })
                    }
                    client.close();
                });
        }
    });
});
app.get("/profile/emp", (req, res) => {
    mongoClient.connect(dbURL, { useNewUrlParser: true }, (error, client) => {
        if (error)
            throw error;
        let db = client.db("profile");
        let cursor = db.collection("emp").find();
        let employee = [];
        cursor.forEach((doc, err) => {
            if (err)
                throw err;
            employee.push(doc);
        }, () => {
            res.json(employee);
            client.close();
        });
    });
});
app.delete("/profile/emp/delete/:id", (request, response) => { 
    let id = parseInt(request.params.id);
    console.log(id)
    mongoClient.connect(dbURL, {useNewUrlParser:true}, (error, client) => {
        if(error) {
            throw error;
        } else {
            let db = client.db("profile");
            db.collection("emp").deleteOne({empid: id})
            .then((doc) => {
                if(doc.deletedCount > 0) {
                    response.status(200).json({"message":`Deleted Successfully`})
                } else {
                    response.status(404).json({"message":`Sorry id doesnt exist`})
                }
                client.close();
            });
        }
    });
});
// Step 9 updating the data using PUT request
app.put("/profile/emp/:id/:dept",(req,res)=>{
    let id = parseInt(req.params.id);
    let dept = req.params.dept;
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error,client)=>{
        if(error)
            throw error;
        let db = client.db("profile");
        //use the collection "user" and update
        db.collection("emp").updateOne({empid:id},{$set:{dept:dept}})
        .then((doc)=>{
            res.json(doc);
            client.close();
        })
    })
})
