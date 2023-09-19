import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    role:{
        type: Boolean,
        default:false
    },
    username:{
        type: String,
        require: [true,'noname'],
        unique:true
    },
    password:{
        type: String,
        require: [true,'nopass'],
        unique:false
    },
    name: {
        type: String,
        require: [false,'noname'],
        unique:false
    },
    surname: {
        type: String,
        require: [false,'nosurname'],
        unique:false
    },
    email:{
        type: String,
        require: [true,'nosurname'],
        unique:true
    },
    country:{
        type: String,
        require: [false,'nosurname'],
        unique:false
    },
    state:{
        type: String,
        require: [false,'nosurname'],
        unique:false
    },
    city:{
        type: String,
        require: [false,'nosurname'],
        unique:false
    },
    phone:{
        type: String,
        require: [false,'nosurname'],
        unique:false
    },
    comment:{
        type: String,
        require: [false,'nosurname'],
        unique:false
    },
    isVerify:{
        type: Boolean,
        unique:false,
        default: false
    },
    isAdmin:{
        type: Boolean,
        unique:false,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    VerifyTokenExpiry: Date
})

const User = mongoose.models.users || mongoose.model('users', userSchema);

export default User;