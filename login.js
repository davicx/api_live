const express = require('express')
const loginRouter = express.Router();


loginRouter.get("/cookie/get", (req, res) => {
    let accessToken = "empty";
    let userName = "empty";
    
    console.log("Trying to get the cookies! ")
    if(req.cookies.accessToken) {
        accessToken = req.cookies.accessToken;
    }    
    if(req.cookies.currentUser) {
        userName = req.cookies.currentUser;
    }

    var response = {
        accessToken: accessToken,
        userName: userName
    }
    console.log(response);

    res.json(response)

})


loginRouter.get("/cookie/set", (req, res) => {
    res.cookie('accessToken', "accessToken", {maxAge: 100 * 60 * 60 * 1000, httpOnly: true})
    res.cookie('currentUser', "davey", {maxAge: 100 * 60 * 60 * 1000, httpOnly: true})
    console.log("Trying to set the cookies! ")

    var response = {
        accessToken: "accessToken",
        userName: "davey",
        outcome: "Set these two cookies!"
    }

    res.json(response)
})

module.exports = loginRouter;