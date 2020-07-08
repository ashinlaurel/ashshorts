const firebase = require("firebase");
require("firebase/storage");
var config = require("./firebaseconfig");
firebase.initializeApp(config);

const storage = firebase.storage();
// module.exports = firebase;
module.exports = { storage, firebase };
