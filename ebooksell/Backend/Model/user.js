import mangoose from 'mangoose';

const userSchema = new mangoose.Schema(
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

const postUser = mangoose.model("user",userSchema);
export default postUser;