const mongoose = require('mongoose');
const validator = require('validator');


const AdminSchema = new mongoose.Schema({

    Admin_ID : {
        type:Number
    },

    name : {
        type:String
    },

    department : {
        type:String
    },

})


const EmpAdmin = new mongoose.model('admin', AdminSchema);

module.exports = EmpAdmin;