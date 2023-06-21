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

// To create to do


module.exports.createTodo = function(req,res){
     console.log("create rout and controller are working");
//     dueDate =req.body.dateValue.split('-'); // splitting date and taking montha value
//    let newdate='';
//     newdate= DateValeu(dueDate);
    console.log(req.body);     
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
    