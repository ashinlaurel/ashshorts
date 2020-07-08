const express = require("express");
const admin = require("firebase-admin");
const firebase = require("firebase");
const config = require("./firebaseconfig");
// const upload = require("express-fileupload");
// const { ref } = require("firebase-functions/lib/providers/database");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const router = express.Router();
admin.initializeApp();
// const firebases = require("./firebase").default;

const cors = require("cors");
app.use(cors());
// app.use(upload());

const loginController = require("./Controllers/LoginController");
const orderFormController = require("./Controllers/OrderFormController");
const postController = require("./Controllers/postController");

app.get("/test", (req, res) => {
  console.log(config);
  return res.send("hello");
});

app.post("/newpost", (req, res) => {
  orderFormController.theorder(req, res);
});

app.post("/signup", (req, res) => {
  loginController.signup(req, res);
});

app.post("/login", (req, res) => {
  loginController.login(req, res);
});

app.post("/output", (req, res) => {
  postController.getdata(req, res);
  // console.log(req.body);
});

app.post("/upload", (req, res) => {
  if (req.files == null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }
  const file = req.files.file;
  // console.log(file);
  // return res.status(200).json();

  storage.ref(`images/${file.name}`).put(file);
  //   .then(() => {
  //     // return res.status(200).json();
  //     console.log("hello");
  //   })
  //   .catch((err) => {
  //     console.log("Hello");
  //     return res.status(500).json({ err: err.code });
  //   });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server Listening on port ${PORT}`);
});
