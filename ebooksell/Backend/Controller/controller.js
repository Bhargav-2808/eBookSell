import User from "./../Model/user.js";
import mongoose from "mongoose";
import crypto from "crypto";
import assert from "assert";

const registerUser = async (req, res) => {
  const fname = req.body.firstName;
  const lname = req.body.lastName;
  const uname = fname + " " + lname;

  const uemail = req.body.email;

  const pass = req.body.password;
  const cpass = req.body.cpassword;

  const algorithm = "aes256";
  const Securitykey = crypto.randomBytes(32);
  const initVector = crypto.randomBytes(16);

 

  try {
    if (pass == cpass) {
     
        const  cipher = crypto.createCipheriv(algorithm,Securitykey,initVector);
        const encrypted = cipher.update("hello mini", "utf8", "hex") + cipher.final("hex");
        
        //const decipher = crypto.createDecipheriv(algorithm, Securitykey,initVector);
        //const decrypted =decipher.update(encrypted, "hex", "utf8") + decipher.final("utf8");
        
      
      const newUser = await new User({
        _id: new mongoose.Types.ObjectId(),
        name: uname,
        email: uemail,
        password: encrypted
      });
      const user = await newUser.save();
      console.log(user);

      if (user) {
        res.status(200).json({ Success: "user added" });
      } else {
        res.status(500).json({ Error: "Inter server Error" });
      }
    } else {
      res.status(402).json({ Error: "Both password should be same" });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export { registerUser };
