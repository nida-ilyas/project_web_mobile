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

    router.get("/klant/:klant_id/progresshabit1",function(req,res){ //

      //  var query = 'SELECT progressHabit1 , date  FROM progressreport WHERE klant_id= \''+ req.params.klant_id + '\' AND ';
        var query = 'SELECT  k.habit_1 , k.habit_2 , k.habit_3 ,p.date, p.progressHabit1 FROM klanten k INNER JOIN progressreport p   ON (k.id = p.klant_id)  WHERE p.klant_id= \''+ req.params.klant_id + '\'' ;
        query = mysql.format(query);// ,table
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                for(var i in rows)
                {


                        res.json({"Error": false, "Message": "Success", "Habit1": rows[i].habit_1, "ProgressHabit1 Status": rows[i].progressHabit1});

                   return ;
                }


                /*
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
*/
            }
        });
    });
    router.get("/klant/:klant_id/progresshabit2",function(req,res){ //

      //  var query = 'SELECT * FROM progressreport WHERE klant_id= \''+ req.params.klant_id + '\'';
        var query = 'SELECT  k.habit_1 , k.habit_2 , k.habit_3 ,p.date, p.progressHabit2 FROM klanten k INNER JOIN progressreport p   ON (k.id = p.klant_id)  WHERE p.klant_id= \''+ req.params.klant_id + '\'' ;
        query = mysql.format(query);// ,table
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                for(var i in rows)
                {

                    res.json({"Error": false, "Message": "Success", "Habit1": rows[i].habit_2,  "ProgressHabit2 Status: ": rows[i].progressHabit2});

                    return ;
                }


            }
        });
    });
    router.get("/klant/:klant_id/progresshabit3",function(req,res){ //

        //var query = 'SELECT * FROM progressreport WHERE klant_id= \''+ req.params.klant_id + '\'';
        var query = 'SELECT  k.habit_1 , k.habit_2 , k.habit_3 ,p.date, p.progressHabit3 FROM klanten k INNER JOIN progressreport p   ON (k.id = p.klant_id)  WHERE p.klant_id= \''+ req.params.klant_id + '\'' ;
        query = mysql.format(query);// ,table
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                for(var i in rows)
                {

                    res.json({"Error": false, "Message": "Success","Habit1": rows[i].habit_3,  "ProgressHabit3: ": rows[i].progressHabit3});

                     return ;
                }



            }
        });
    });

}
module.exports = REST_ROUTER_PER_HABIT;
/*

 // var query = "SELECT * FROM ?? WHERE ??=? OR ??=?" ;
 //  var table = ["progressreport","klant_id",req.params.klant_id,"??" , req.params.p_habit];
 //  var query = "SELECT * FROM progressreport WHERE klant_id ="+ req.params.klant_id + " AND IN (progressHabit1, progressHabit2, progressHabit3) ="+ req.param.p_habit ;
 //  var query ="SELECT column_name FROM information_schema.columns where table_name='progressreport' AND column_name LIKE '%progressHabit%'" ;
 const GetDashboard= (userId) => {
 const optins ={
 method: 'GET',
 headers: new Headers({'x-user-id': userId})
 }
 return fetch(`${ApiUrl}/dashboard`, optins).then(result =>result.json());
 }
 export default GetDashboard;
 */

