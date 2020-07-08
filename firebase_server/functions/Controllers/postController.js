const firebase = require("../firebase");

const postController = {
  getdata(req, res) {
    unsubscribe = firebase.firestore().collection("orderdata");
    unsubscribe
      .get()
      .then(function (snapshot) {
        let newOrder = snapshot.docs.map((i) => ({
          id: i.id,
          ...i.data(),
        }));
        res.status(200).json(newOrder);
      })
      .catch((err) => {
        console.log("Error getting documents: ", error);
        res.status(500).json(err);
      });
  },
};
module.exports = postController;
