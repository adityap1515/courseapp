const express = require('express');
const courseRouter = express.Router(); 


courseRouter.get("/", function(req, res){


});

courseRouter.post("/purchase", function(req, res){


});
courseRouter.get("/allcourses", function(req, res){
    res.json({
        messege: "Reached the endpoint"
    })
});


module.exports = {
    courseRouter: courseRouter
}