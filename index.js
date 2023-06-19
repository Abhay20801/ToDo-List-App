const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');
const port = 8000;

   // Use Express route
   app.use('/',require('./routes/index'));
// Set up the view engine
   app.set('view engine','ejs');
    app.set('views','./views');


    // Setup static file
     app.use(bodyParser.urlencoded({extended: false})); 
    app.use(express.static('assessts'));
    


app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server at port ${port}`);
    }

    console.log(`Server is running on port ${port}`);
});