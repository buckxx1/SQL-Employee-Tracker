const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = require('./config/connectionconnection');
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3200;

const app = express();

app.use(express.static("./public/"));


app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
const routes = require('./controllers/dataController.js');

app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));