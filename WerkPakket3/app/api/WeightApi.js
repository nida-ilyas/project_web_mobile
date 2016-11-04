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
        var table = ["progressreport","weight",req.body.weight,"klant_id" ,req.params.klant_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                throw err;
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "updated weight "+req.body.weight});
            }
        });
    });
}
module.exports = REST_ROUTERWEIGHT;


