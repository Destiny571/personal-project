const mongoose = require("mongoose");

const roomShema = mongoose.Schema({

    name : {
        type: string ,
        required: true
    },
    maxcount : {
        type: Number ,
        required: true

    },
    phonenumber : {
        type: Number,
        require: true
    },
    rentperday : {
        type: Number ,
        required: true
    },
    Imageurls : [],
    currentbookings : [],
    type : {
        type: string,
        require: true

    },
    description : {
        type: string,
        required: true
    }

} , {
    timestamps : true,

})

const


