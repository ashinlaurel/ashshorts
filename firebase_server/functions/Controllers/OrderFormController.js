const { ref } = require("firebase-functions/lib/providers/database");

const firebase = require("../firebase").default;
const moment = require("moment");

const orderFormController = {
  theorder(req, res) {
    // let today = new Date();
    // let timer =
    //   today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let today = moment().format();
    let imgfile = req.file;
    // console.log("here" + { imgfile });
    const neworder = {
      createdat: today,
      sort_date: new Date(),
      title: req.body.title,
      //   name_lower: req.body.name.toLowerCase(),
      desc: req.body.desc,
      fileurl: req.body.fileurl,
      user: req.body.user,
    };
    // console.log(imgfile);
    // console.log(imgfile);
    // return res.status(200).json();

    const db = firebase.firestore();
    db.collection("orderdata")
      .add(neworder)
      .then((ref) => {
        console.log("Added document with ID: ", ref.id);
        // return res.status(200).json({ message: "Document Added" });

        return res.status(200).json();
      })
      .catch((err) => {
        console.log(err.code);
        return res.status(500).json({ err: err.code });
      });
  },
};

module.exports = orderFormController;
