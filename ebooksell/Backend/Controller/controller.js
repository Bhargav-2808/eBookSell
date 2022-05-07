import { User, Category, Book } from "./../Model/user.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import multer from "multer";
import path from "path";
import fs from 'fs';
const __dirname = path.resolve(path.dirname(""));
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "./images/"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname + "-" + Date.now());
  },
});

// const fileFilter = (req, file, cb) => {
//   const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
//   if (allowedFileTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

export const upload = multer({
  storage: storage,
  limits: { fieldSize: 10 * 1024 * 1024 },
});

const registerUser = async (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;

  const uemail = req.body.email;

  const pass = req.body.password;
  const cpass = req.body.cpassword;
  const role = "buyer";
  try {
    const userExist = await User.findOne({ email: uemail });
    if (userExist) {
      res.status(400).json({ Error: "User Alreay Exist" });
    } else {
      if (pass == cpass) {
        const salt = bcrypt.genSaltSync(10);
        const encrypted = bcrypt.hashSync(pass, salt);

        const newUser = await new User({
          _id: new mongoose.Types.ObjectId(),
          firstname: fname,
          lastname: lname,
          role: role,
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
      const decrypted = bcrypt.compareSync(password, luser.password);
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

const displayUser = async (req, res) => {
  const user = await User.find();
  // console.log(user);
  try {
    res.status(200).json(user);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const displayUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  console.log(user);
  try {
    res.status(200).json(user);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const editUser = async (req, res) => {
  User.updateOne({ _id: req.params.id }, req.body)
    .then((result) => {
      res.status(200).json({ message: "Update successful!" });
    })
    .catch((error) => {
      res.status(400).json({
        error: error.message,
      });
    });
};

const deleteUser = async (request, response) => {
  try {
    await User.deleteOne({ _id: request.params.id });
    response.status(201).json("User deleted Successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

const paginateUser = async (req, res) => {
  const page = req.query.page || 1;

  const perPage = req.query.perPage || 4;

  const searchQuery = req.query.search;

  try {
    const count = await User.countDocuments({});
    const totalPages = Math.ceil(count / perPage);

    let searchData;
    console.log(searchQuery);
    if (searchQuery === "") {
      searchData = await User.find({})
        .sort({ firstname: 1, lastname: 1 })
        .skip((page - 1) * parseInt(perPage))
        .limit(parseInt(perPage));
    } else {
      searchData = await User.find({
        $or: [
          { firstname: { $regex: searchQuery, $options: "i" } },
          { lastname: { $regex: searchQuery, $options: "i" } },
          { role: { $regex: searchQuery, $options: "i" } },
          { email: { $regex: searchQuery, $options: "i" } },
        ],
      })
        .sort({ firstname: 1, lastname: 1 })
        .skip((page - 1) * parseInt(perPage))
        .limit(parseInt(perPage));
    }

    res.status(200).json({
      count,
      searchData,
      totalPages,
    });
  } catch (error) {
    res.status(400).json({
      error: `Error getting data : ${error.message}`,
    });
  }
};

const addCategory = async (req, res) => {
  const category = req.body.category;

  // console.log(category);
  const categoryExist = await Category.findOne({ category: category });
  try {
    if (categoryExist) {
      res.status(400).json({
        error: "Category Already Exist",
      });
    } else {
      const newCategory = await new Category({
        _id: new mongoose.Types.ObjectId(),
        category: category,
      }).save();

      try {
        res.status(200).json({
          success: "Category added successfully",
        });
      } catch (error) {
        res.status(401).json({
          Fail: "Error occurred",
          error: error,
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      Fail: "Internal Server Error",
      error: error,
    });
  }
};

const paginateCategory = async (req, res) => {
  const page = req.query.page;
  const perPage = req.query.perPage;
  const searchQuery = req.query.search;

  // console.log(page,perPage,searchQuery);
  try {
    const count = await Category.countDocuments({});
    const totalPages = Math.ceil(count / perPage);

    let searchCategory;
    if (searchQuery === "") {
      searchCategory = await Category.find({})
        .sort({ category: 1 })
        .skip((page - 1) * parseInt(perPage))
        .limit(parseInt(perPage));
    } else {
      searchCategory = await Category.find({
        $or: [{ category: { $regex: searchQuery, $options: "i" } }],
      })
        .sort({ category: 1 })
        .skip((page - 1) * parseInt(perPage))
        .limit(parseInt(perPage));
    }

    res.status(200).json({
      count,
      searchCategory,
      totalPages,
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const displayCategoryById = async (req, res) => {
  const category = await Category.findById(req.params.id);

  console.log(category);
  try {
    res.status(200).json(category);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const editCategory = async (req, res) => {
  Category.updateOne({ _id: req.params.id }, req.body)
    .then((result) => {
      res.status(200).json({ message: "Update successful!" });
    })
    .catch((error) => {
      res.status(400).json({
        error: error.message,
      });

      console.log(error);
    });
};

const deleteCategory = async (request, response) => {
  try {
    await Category.deleteOne({ _id: request.params.id });
    response.status(201).json("Category deleted Successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

const displayCategory = async (req, res) => {
  const user = await Category.find();
  // console.log(user);
  try {
    res.status(200).json(user);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const addBook = async (req, res) => {
  // try {
  //   console.log(picture);
  // } catch (error) {
  //   res.send(error.message);
  // }
  // console.log(fn,picture)
  // console.log(req.files);

  try {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const category = req.body.category;
    const price = req.body.price;
    const description = req.body.description;
     const img = req?.file;
    // var img = fs.readFileSync(req.file.path);
    // var encode_img = img.toString("base64");
    // var final_img = {
    //   contentType: req.file.mimetype,
    //   image: new Buffer(encode_img, "base64"),
    // };
    // console.log(img,final_img);
    const book = await new Book({
      _id: new mongoose.Types.ObjectId(),
      firstname: fname,
      lastname: lname,
      category: category,
      price: price,
      description: description,
      base64image: JSON.stringify(img),
    }).save();

    try {
      res.status(200).json({
        success: "Category added successfully",
      });
    } catch (error) {
      res.status(401).json({
        Fail: "Error occurred",
        error: error,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  registerUser,
  loginUser,
  displayUser,
  displayUserById,
  editUser,
  deleteUser,
  paginateUser,
  addCategory,
  paginateCategory,
  displayCategoryById,
  editCategory,
  deleteCategory,
  displayCategory,
  addBook,
};
