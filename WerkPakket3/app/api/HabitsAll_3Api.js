/**
 * Created by Wasla on 11/1/2016.
 */
//import ApiUrl from './ApiUrl';
var mysql = require("mysql");


function REST_ROUTERHABITS(router,connection) {
    var self = this;
    self.handleRoutes(router,connection);
}

REST_ROUTERHABITS.prototype.handleRoutes= function(router,connection) {

    router.get("/klant/:klant_id/habits",function(req,res){
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["klanten","id",req.params.klant_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                for(var i in rows)
                {
                    res.json({"Error" : false, "Message" : "Success", "Habit1" : rows[i]. habit_1, "Habit2": rows[i].habit_2, "Habit3":  rows[i].habit_3});
                    return;
                }

            }
        });
    });

}
module.exports = REST_ROUTERHABITS;
/*
 const GetDashboard= (userId) => {
 const optins ={
 method: 'GET',
 headers: new Headers({'x-user-id': userId})
 }
 return fetch(`${ApiUrl}/dashboard`, optins).then(result =>result.json());
 }
 export default GetDashboard;
 */

