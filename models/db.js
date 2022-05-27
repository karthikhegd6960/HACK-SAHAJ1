const mongoose=require('mongoose');

const Schema =mongoose.Schema

const signup1=new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneno:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    
    dob:{
        type:Date,
        required:true
        
    }

})

const driversignuptemplate=new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    phoneno:{
        type:Number,
        required:true
    },
    
    license_no:{
        type:String,
        required:true
    },
    
    insurance_policy_no:{
        type:String,
        required:true
    },
    license_photo:{
        type:Buffer,
        required:false,
        contentType:String

    },
    type_of_truck:{
        type:String,
        required:true
    },
    truck_photo:{
        type:Buffer,
        required:false,
        contentType:String
    },
    
    



})

const driverlogintemplate=new Schema({
    phoneno:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const clientsignuptemplate=new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:false
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    },
    phoneno:{
        type:Number,
        required:true
    }
})

const clientlogintemplate= new Schema({
    phoneno:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

const client=mongoose.model('client',clientsignuptemplate);
const driver=mongoose.model('driver',driversignuptemplate);

module.exports={client,driver};