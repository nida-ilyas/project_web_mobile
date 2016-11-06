var express = require("express");
var mysql   = require("mysql");
var bodyParser  = require("body-parser");
var md5 = require('MD5');
//var rest = require("./REST.js");
var dashboardRest = require("./app/api/DashboardApi.js");
var habits3Rest = require("./app/api/HabitsAll_3Api.js");
var weightRest = require("./app/api/WeightApi.js");
var caloriesRest = require("./app/api/CaloriesApi.js");
var perhabitRest = require("./app/api/PerHabitApi.js");



var app  = express();

/*
function DashboardRest()
{
    var self = this;
    self.connectMysql();

};
*/
function REST(){
    var self = this;
    self.connectMysql();
};

REST.prototype.connectMysql = function() {
    var self = this;

    var pool      =    mysql.createPool({
        connectionLimit : 100,
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'web_mobile_project_3',
        debug    :  false
    });
    pool.getConnection(function(err,connection){
        if(err) {
          self.stop(err);
        } else {
          self.configureExpress(connection);
        }
    });
}

REST.prototype.configureExpress = function(connection) {
      var self = this;
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(bodyParser.json());
      var router = express.Router();
      app.use('/api', router);
      //var rest_router = new rest(router,connection,md5);
    var rest_router = new dashboardRest(router,connection);
    var rest_routerHabits = new habits3Rest(router,connection);
    var rest_routerWeight = new weightRest(router,connection);
    var rest_routerCalories = new caloriesRest(router,connection);
    var rest_routerPerHabit = new perhabitRest(router,connection);
      self.startServer();
}

REST.prototype.startServer = function() {
      app.listen(8081,function(){
          console.log("All right ! I am alive at Port 8081.");
      });
}

REST.prototype.stop = function(err) {
    console.log("ISSUE WITH MYSQL n" + err);
    process.exit(1);
}

new REST();