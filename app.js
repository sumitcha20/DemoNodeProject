/** -------- Requires -------- **/
const http = require('http');
const nodeMailer = require('nodemailer');
const express = require("express");
const bodyParser = require("body-parser");
const Login = require("./Routes/Admin/Login");
const SignUp = require("./Routes/Admin/SignUp");
const Auth = require("./Routes/Admin/Auth");

/** -------- Config -------- **/
var app = express();

/** -------- MiddleWare Start -------- **/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


/** -------- Register Routes -------- **/

// app.use("/api/v1/signup", SignUp);
// app.use("/api/v1/login", Login);
// app.use("/api/v1/verification", Auth);

var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/TestDB";
var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("TestDB");
//   dbo.createCollection("Users", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("TestDB");
//   var myobj = { Username: "Sumit", Password: "tftus123" };
//   dbo.collection("customers").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("TestDB");
//   dbo.collection("customers").findOne({}, function(err, result) {
//     if (err) throw err;
//     console.log(result.Username);
//     console.log(result.Password);
//     db.close();
//   });
// });