/*
var mysql = require("mysql");
*/
/*
function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}
*/


/*
function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}
*/
/*
REST_ROUTER.prototype.handleRoutes= function(router,connection,md5) {
    router.get("/",function(req,res){
        res.json({"Message" : "Hello World !"});
    });
   router.get("/allklanten",function(req,res){
        var query = "SELECT * FROM ??";
        var table = ["klanten"]
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
    });
    
    router.get("/klant/:klant_id",function(req,res){
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["klanten","id",req.params.klant_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
    });

    router.put("/klant/:klant_id/weight",function(req,res){
        var query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        var table = ["progressreport","weight",req.params.klant_id,req.body.weight];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "updated weight "+req.body.weight});
            }
        });
    });



}

module.exports = REST_ROUTER;
    */