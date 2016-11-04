/**
 * Created by Wasla on 11/1/2016.
 */
/**
 * Created by Wasla on 11/1/2016.
 */
//import ApiUrl from './ApiUrl';
var mysql = require("mysql");


function REST_ROUTER_PER_HABIT(router,connection) {
    var self = this;
    self.handleRoutes(router,connection);
}

REST_ROUTER_PER_HABIT.prototype.handleRoutes= function(router,connection) {

    router.get("/klant/:klant_id/:p_habit",function(req,res){
        var query = "SELECT * FROM ?? WHERE ??=? OR ??=?" ;
        var table = ["progressreport","klant_id",req.params.klant_id,"??" , req.params.p_habit];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                for(var i in rows)
                {
                    if(req.param.p_habit == "progressHabit1")
                     {

                    res.json({"Error" : false, "Message" : "Success", "Habit1" : rows[i]. progressHabit1});

                      }
                    if(req.param.p_habit == "progressHabit2")
                    {

                        res.json({"Error" : false, "Message" : "Success", "Habit1" : rows[i]. progressHabit2});

                    }
                    if(req.param.p_habit == "progressHabit3")
                    {

                        res.json({"Error" : false, "Message" : "Success", "Habit1" : rows[i]. progressHabit3});

                    }


                }

            }
        });
    });

}
module.exports = REST_ROUTER_PER_HABIT;
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

