/**
 * Created by Wasla on 11/1/2016.
 */
//import ApiUrl from './ApiUrl';
var mysql = require("mysql");


function REST_ROUTERWEIGHT(router,connection) {
    var self = this;
    self.handleRoutes(router,connection);
}

REST_ROUTERWEIGHT.prototype.handleRoutes= function(router,connection) {

    router.put("/klant/:klant_id/weight",function(req,res){
        var query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        var table = ["progressreport","weight",req.body.weight,"klant_id", "date",Date.now() ,req.params.klant_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                throw err;
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "updated weight "});
            }
        });
    });

    router.post("/klant/:klant_id/postweight",function(req,res){
        var query = 'INSERT INTO progressreport(weight,date) VALUES(weight=\''+ req.body.weight + '\',date=\''+ req.body.date + '\') FROM klant WHERE id=\''+ req.params.klant_id + '\'';
       // var table = ["progressreport","weight","date","klant_id",req.params.klant_id];
        query = mysql.format(query); //,table
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Weight added !"});
            }
        });
    });

    router.get("/klant/:klant_id/weightoverzicht",function(req,res){
        var query = "SELECT date , weight  FROM ?? WHERE ??=? AND  DATE_ADD(NOW(), INTERVAL -30 DAY)" ;
        var table = ["progressreport","klant_id",req.params.klant_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                for(var i in rows)
                {
                    res.json({"Error" : false, "Message" : "Success", rows});
                    //res.json({"Error" : false, "Message" : "Success", "date" : rows[i].date, "weight": rows[i].weight});
                    return ;
                }

            }
        });
    });
}
module.exports = REST_ROUTERWEIGHT;


