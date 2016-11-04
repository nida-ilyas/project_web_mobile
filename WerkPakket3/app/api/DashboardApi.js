//import ApiUrl from './ApiUrl';
var mysql = require("mysql");


function REST_ROUTER(router,connection) {
    var self = this;
    self.handleRoutes(router,connection);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection) {

    router.get("/klant/:klant_id/dashboard",function(req,res){
        var ids = req.params.klant_id;
        var query = 'SELECT  k.habit_1 , k.habit_2 , k.habit_3 ,p.weight, p.calories FROM klanten k INNER JOIN progressreport p   ON (k.id = p.klant_id)  WHERE k.id= \''+ req.params.klant_id + '\'' ; //progressreport p ON p.klant_id == k.id (, p.weight, p.calories ) habit_1 , habit_2 , habit_3
      //  var table = ["id",req.params.klant_id];
        query = mysql.format(query); //,table
        connection.query(query,function(err,rows){
            //connection.release(); // extra
            if(err) {
                throw err;
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                for(var i in rows)
                {
                    res.json({"Error" : false, "Message" : "Success", "Habit1" : rows[i]. habit_1, "Habit2": rows[i].habit_2, "Habit3":  rows[i].habit_3 , "Weight": rows[i].weight, "Calories": rows[i].calories});
                    return; 
                }

            }
        });
    });

}
module.exports = REST_ROUTER;
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

