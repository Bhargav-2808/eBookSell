import mongoose from 'mongoose';

const userSchema =  new mongoose.Schema(
    {
        _id:mongoose.Schema.Types.ObjectId,
        name:{
            type:String,
        },
        email:{
            type:String,
            unique:true
        },
        password:{
            type:String,
        }
    }
)

const postUser = mongoose.model("user",userSchema);
export default postUser;