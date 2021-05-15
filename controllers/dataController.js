//add requirements

const express = require("express");
const router = express.Router();

//Import models (ORM)

const employee = require("../models/employees.js");

//make routes to interact correctly with SQL DB

router.get("/", function (req, res) {
    res.render("index")
});

router.get("/api/form/:type/:set" ,function (req, res) {
    const type = req.params.type;
    const set = req.params.set;
    if (type === "query" && set === "department") {
        let formset = {
            formSet: 
            [{
                query : true,
                department : true
            }]
        }
        res.render("modal", formSet)
    }
    if (type === "query" && set === "manager") {
        let formSet = {
            formSet: [{
                query : true,
                manager : true
            }]
        }
        res.render("modal", formset)
    }
});

router.get("/api/all", function (req, res) {
    employee.read("all",null ,function (data) {
        let dataObject = {
            employees: data
        };
        res.render("index", dataObject)
    });
});

router.get("/api/:query/:criteria", function (req, res) {
    const query = req.params.query;
    const criteria = req.params.criteria;
    if (query === "departments") {
        employee.read(query, criteria, function (data) {
            let dataObject = {
                employees: data
            };
        })
    };
    if (query === "managers") {
        employee.read(query, criteria, function (data) {
            let dataObject = {
                employees: data
            };
            res.render("index", dataObject)
        })
    };
});

//do not forget to export!!!
module.exports = router;