import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  role: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

const categorySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  category: {
    type: String,
    unique: true,
    required: true,
  },
});

const bookSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  base64image: {
    type: String,
    required: true,
  },
});

const cartSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  totalbooks: {
    type: Number,
    required: true,
  },
  totalprice: {
    type: Number,
    required: true,
  },
  OrderDate: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("user", userSchema);
const Category = mongoose.model("category", categorySchema);
const Book = mongoose.model("book", bookSchema);
const Cart = mongoose.model("cart", cartSchema);
export { User, Category, Book, Cart };
