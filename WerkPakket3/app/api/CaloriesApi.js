/**
 * Created by Wasla on 11/1/2016.
 */
//import ApiUrl from './ApiUrl';
var mysql = require("mysql");


function REST_ROUTERCALORIES(router,connection) {
    var self = this;
    self.handleRoutes(router,connection);
}

REST_ROUTERCALORIES.prototype.handleRoutes= function(router,connection) {

    router.put("/klant/:klant_id/calories",function(req,res){
        var query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        var table = ["progressreport","calories",req.body.calories, "date",Date.now(),"klant_id" ,req.body.klant_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                throw err;
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "updated calories "+req.body.calories});
                return;
            }
        });
    });

    router.post("/klant/:klant_id/postcalories",function(req,res){
        var query = 'INSERT INTO progressreport(??,??,klant_id) VALUES (?,?,(SELECT id FROM klanten WHERE id=\''+ req.params.klant_id + '\'))';
        var table = ["calories", "date", req.body.calories,req.body.date];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "calories posted !"});
            }
        });
    });

    router.get("/klant/:klant_id/caloriesoverzicht",function(req,res){
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["progressreport","klant_id",req.params.klant_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                for(var i in rows)
                {
                    res.json({"Error" : false, "Message" : "Success", "date" : rows[i].date, "calories": rows[i].calories});
                    return ;
                }

            }
        });
    });
}
module.exports = REST_ROUTERCALORIES;



;


