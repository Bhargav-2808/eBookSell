import mongoose from 'mongoose';

const userSchema =  new mongoose.Schema(
    {
        _id:mongoose.Schema.Types.ObjectId,
        firstname:{
            type:String,
        },
        lastname:{
            type:String,
        },
        role:{
            type:String
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


const categorySchema = new mongoose.Schema(
    {
        _id:mongoose.Schema.Types.ObjectId,
        category:{
            type:String,
            unique:true,
            required:true
        }
    }

)

const User = mongoose.model("user",userSchema);
const Category = mongoose.model("category",categorySchema);
export {User,Category};