import User from "./../Model/user.js";
import mongoose from "mongoose";
import crypto from "crypto";
import assert from "assert";
import bcrypt from 'bcrypt'

const registerUser = async (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const uname = fname + " " + lname;

  const uemail = req.body.email;

  const pass = req.body.password;
  const cpass = req.body.cpassword;

  console.log(req.body);

  try {
    const userExist = await User.findOne({ email: uemail });
    if (userExist) {
      res.status(400).json({ Error: "User Alreay Exist" });

    } else {
      if (pass == cpass) {
        const salt = bcrypt.genSaltSync(10);
        const encrypted=bcrypt.hashSync(pass, salt);
        
        
        
        // const algorithm = "aes256";
        // const Securitykey = crypto.randomBytes(32);
        // const initVector = crypto.randomBytes(16);
        // console.log(Securitykey);
        // console.log(initVector);
        // crypto.createHash;
        // const cipher = crypto.createCipheriv(
        //   algorithm,
        //   Securitykey,
        //   initVector
        // );
        // const encrypted =
        //   cipher.update(pass, "utf8", "hex") + cipher.final("hex");



        const newUser = await new User({
          _id: new mongoose.Types.ObjectId(),
          name: uname,
          email: uemail,
          password: encrypted,
        });
        const user = await newUser.save();
        console.log(user);

        try {
          if (user) {
            res.status(200).json({ Success: "user added" });
          }
        } catch (error) {
          res.status(500).json(error.message);
        }
      } else {
        res.status(402).json({ Error: "Both password should be same" });
      }
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const loginUser = async (req, res) => {
  const lemail = req.body.email;
  const password = req.body.password;

  try {
    const luser = await User.findOne({ email: lemail });

    if (luser) {
      // res.send("user found")
      // console.log(luser.password);
      // const algorithm = "aes256";
      // const Securitykey = crypto.randomBytes(32);
      // const initVector = crypto.randomBytes(16);
      // console.log(Securitykey);
      // console.log(initVector);
      
      // const decipher = crypto.createDecipheriv(
      //   algorithm,
      //   Securitykey,
      //   initVector
      // );
      // //decipher.setAutoPadding(false);
      // const decrypted =
      //   decipher.update("b0d28fb7f2c1bd8ee9fdbc7de2cf7530", "hex", "utf8") +
      //   decipher.final("utf8");
      // console.log(decrypted);
      const decrypted =bcrypt.compareSync(password, luser.password); 
      if (decrypted) {
        res.status(200).json({ Success: "Login Successfull." });
      } else {
        res.status(400).json({ Error: "Login Using Correct Credentials." });
      }



    } else {
      res.status(400).json({ Error: "No User Found." });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export { registerUser, loginUser };
