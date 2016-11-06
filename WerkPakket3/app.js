/**
 * Created by Wasla on 11/5/2016.
 */
// holds the configuration for our expres app
//

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, res, next) {
    // Handle the get for this route
});

app.post('/', function(req, res, next) {
    // Handle the post for this route
});