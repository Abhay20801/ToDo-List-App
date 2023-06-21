
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');


const port = 8000;

const db = require('./config/mongoose');

const TodoLists = require('./models/task');  

   // Use Express route
   app.use('/',require('./routes/index'));
// Set up the view engine
   app.set('view engine','ejs');
   app.set('views',path.join(__dirname,'views'));


    // Setup static file
    app.use(bodyParser.json()) ;
    app.use(bodyParser.urlencoded({extended: false})); 

    app.use(express.static('assessts'));
    


app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server at port ${port}`);
    }

    console.log(`Server is running on port ${port}`);
});