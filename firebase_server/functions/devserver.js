const express = require("express");
const admin = require("firebase-admin");
const firebase = require("firebase");
const config = require("./firebaseconfig");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const router = express.Router();
admin.initializeApp();
const firebases = require("./firebase").default;

const cors = require("cors");
app.use(cors());

app.get("/test", (req, res) => {
  console.log(config);
  return res.send("hello");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server Listening on port ${PORT}`);
});
