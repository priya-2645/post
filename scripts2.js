const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
var http = require("http");
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

const db = new Sequelize('employee', 'root', 'Sairam3@', {
    host: 'localhost',
    dialect: 'mysql'
});
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
var server = app.listen(3000, "127.0.0.1", function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

});
app.post('/employee', function (req, res) {
    var postData = req.body;
    connection.query('INSERT INTO employee SET ?', postData, function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});


const User = db.define('User', {
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    address: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    },

}, {
    // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
const User1 = db.define('User1', {
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    address: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    },

}, {
    // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User1 === sequelize.models.User1); // true

db.sync({
    force: true
})
    .then(() => {
        const jane = User.bulkCreate([
            {
                firstName: "Priya",
                lastName: "Murugan",
                address: "Rjpm",
                age: 22,
            }, {
                firstName: "Priya",
                lastName: "Murugan",
                address: "Rjpm",
                age: 22,
            },
        ])
    })
    .catch((err) => console.log(err))
db.sync({
    force: true
})
    .then(() => {
        const jane = User1.bulkCreate([
            {
                firstName: "deekshu",
                lastName: "subramanian",
                address: "Rjpm",
                age: 22,
            }, {
                firstName: "geetha",
                lastName: "priya",
                address: "Rjpm",
                age: 22,
            },
        ])
    })
    .catch((err) => console.log(err))



// db.authenticate()
//   .then(() => {
//     console.log('connection success')
//   })
module.exports - {
    db
}