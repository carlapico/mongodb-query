/*

------------------------------------------------------------------
                            MONGO DB 
__________________________________________________________________

*/

//install library in project // 
    //npm i -y

//import mongo tools/library 
const { MongoClient, ServerApiVersion } = require('mongodb')


// connect to Mongo/Atlas USING A URL CONNECTION STRING (exported it out of this page to protect it so now we have to import it)
const { uri } = require ('./dbsecrets.js') // when importing a library reference the library from where the current file is  

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1})

// connect to sample_mflix database 
const db = client.db("sample_mflix") //  document databases has collections that have documents // 


// write a query
    // let's get a specific movie (doc) from the movies collection 
        // search by title for "Back to the Future"
db.collection('movies')
    .findOne({title: "Back to the Future"}, (err, results) => { // we used callbacks here because this was the one we were familiarizing ourselves with
        if (err){
            console.error(error) // this is to help troubleshoot
        }

        console.log(results); //let's output the results
        client.close() // this is to close out client so it doesn't continue running 
})  

//output results 

/* 
____________________________________________________________________________________________________
                          PROTECTING OUR SECRET INFORMATION 
____________________________________________________________________________________________________
*/
// if we were to push this to github this could be dangerous because if it is public 
// the security of our database could be compromised 