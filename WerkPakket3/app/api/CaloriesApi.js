/**
 * Created by Wasla on 11/1/2016.
 */
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
        var table = ["progressreport","calories",req.body.calories,"klant_id" ,req.body.klant_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                throw err;
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "updated calories "+req.body.calories});
            }
        });
    });
}
module.exports = REST_ROUTERCALORIES;



;


