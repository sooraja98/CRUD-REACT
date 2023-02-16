const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./model/usermodel");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const validate = require("validator");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/crud");

app.use(express.static("uploads"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads"); // replace this with your desired file upload destination
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

//Register the users
app.post("/register", upload.single("pic"), async (req, res) => {
  const { name, email, password, age, job, phone } = req.body;
  const file = req.file;
  const user = new User({
    name: name,
    email: email,
    password: password,
    phone: phone,
    age: age,
    job: job,
    image: req.file.filename,
  });
  const nameNumber = user.name.length;
  const ageCheck = user.age;
  const passwordCheck = user.password.length;

  const us = await user.save();
  if (us) {
    res.json("registered");
  } else {
    console.log("error");
  }
});

//Login the users
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  console.log(user);
  if (user) {
    const token = jwt.sign({ email: email }, "123121");
    return res.json({ status: "registered", user, token });
  } else {
    return res.json("error");
  }
});

//Get the users
app.get("/users", async (req, res) => {
  const users = await User.find();
  return res.json(users);
});

// Delete a user by id
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete(id, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error deleting user");
    } else {
      console.log(`User ${id} deleted`);
      res.status(200).send(`User ${id} deleted`);
    }
  });
});

//add the user here
app.post("/adduser", upload.single("pic"), async (req, res) => {
  const { name, email, password, age, job, phone } = req.body;
  const file = req.file;
  console.log(name, email, password);
  console.log(file.path);
  const user = new User({
    name: name,
    email: email,
    password: password,
    phone: phone,
    age: age,
    job: job,
    image: req.file.filename,
  });
  const us = await user.save();
  if (us) {
    res.json("registered");
  } else {
    console.log("error");
  }
});

//edit the user here
app.get("/editusers/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    console.log("hai");
    console.log(user);
    return res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//change the user datas
app.put("/changedata/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, age, phone, job } = req.body;
  try {
    const user = await User.findByIdAndUpdate(id, {
      name,
      email,
      age,
      phone,
      job,
    });
    if (user) {
      res.json("oke");
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

app.listen(4000, () => {
  console.log("the server is started");
});
