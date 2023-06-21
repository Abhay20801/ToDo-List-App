//
//const db = require('./config/mongoose')
const TodoLists = require('../models/task')

module.exports.home = function(req,res){
    // fetching using mongoose
    // Fetching the Todo from the database
    TodoLists.find({}).then((todo)=>{
        return res.render('home',{
            title:"My Todo List ",
            todo_list : todo
        });
    }).catch((err)=>{
        console.log('error in fetching Todos from the database',err);
    });
               
    
}

// function for new Data
function DateValeu(dueDate){
    let months = ['jan','feb','mar','Apr','May','june','july','aug','sept','oct','nov','dec'] // static value for implementing monthe value


    newdate = '';
    let monapp = '';
    // checking months 
    if(dueDate[1] == '01'){
        monapp=months[0];
    }
    else if(dueDate[1] == '02'){
        monapp=months[1];
    }else if(dueDate[1] == '03'){
        monapp=months[2];
    }else if(dueDate[1] == '04'){
        monapp=months[3];
    }else if(dueDate[1] == '04'){
        monapp=months[3];
    }else if(dueDate[1] == '05'){
        monapp=months[4];
    }else if(dueDate[1] == '06'){
        monapp=months[5];
    }else if(dueDate[1] == '07'){
        monapp=months[6];
    }else if(dueDate[1] == '08'){
        monapp=months[7];
    }else if(dueDate[1] == '09'){
        monapp=months[8];
    }else if(dueDate[1] == '10'){
        monapp=months[9];
    }else if(dueDate[1] == '11'){
        monapp=months[10];
    }else if(dueDate[1] == '12'){
        monapp=months[11];
    }
    newdate =dueDate[2]+'-'+monapp+'-'+dueDate[0] // displaying date in dd-mm-yyyy formate
    return newdate;
}




// To create to do


module.exports.createTodo = function(req,res){
     console.log("create rout and controller are working");
     dueDate =req.body.dateValue.split('-'); // splitting date and taking montha value
     console.log(dueDate);
    let newdate='';
    newdate= DateValeu(dueDate);
    console.log(newdate);
        
    TodoLists.create({ // crating new todo and storing into DB
        
        desc:req.body.desc,
        category:req.body.category,
        dueDate: newdate
    }).then((newTask)=>{
        console.log("****",newTask);
        return res.redirect('back');
    }).catch((err)=>{
        console.error(err);
    });
}

 module.exports.deleteTodo = function(req,res){
    //      Get the id from the url
    let id = req.query.id;
    
    // Find the contact in the database usind id and delete it
    TodoLists.findByIdAndDelete(id).then(()=>{
        return res.redirect('back');
    }).catch((err)=>{
        console.log('Error in deleting id=',err);
    });
 
    }
    