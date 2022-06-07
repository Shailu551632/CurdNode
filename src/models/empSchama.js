const mongoose = require('mongoose');
const validator = require('validator');


const EmpSchema = new mongoose.Schema({
    name : {
        type:String
    },

    salary : {
        type:Number
    },

    Department : {
        type : String
    }
})


const Employee = new mongoose.model('Employee', EmpSchema);

module.exports = Employee;