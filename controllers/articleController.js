var express = require("express");
var db = require("../models")
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    db.Article.find({})
    .populate("note")
    .then(function(dbArticle) {
        var hbsObject={

            articles: dbArticle
        }
        
        console.log(hbsObject)
      // If we were able to successfully find Articles, send them back to the client
      res.render("index", hbsObject);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.render(err);
    });
});

module.exports = router;