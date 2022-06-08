const mongoose = require('mongoose');
const validator = require('validator');


const EmpSchema = new mongoose.Schema({

    Emp_ID : {
        type:Number
    },

    name : {
        type:String
    },

    salary : {
        type:Number
    },

    
})


const Employee = new mongoose.model('Employee', EmpSchema);

module.exports = Employee;