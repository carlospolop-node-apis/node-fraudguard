const request = require('request');

var user = "";
var pass = "";

function checkIP(ip){
    var promise = new Promise(function(resolve, reject) {
        if (user == "" || pass == "" ) reject(Error("Please set the user and password"));

        var url = 'https://' + user + ':' + pass + '@api.fraudguard.io/ip/'+ip;
        request({url: url}, function (error, response, body) {
            if (error) reject(Error("Error using fraudguard: "+error));
            if (body){
                try {
                    job = JSON.parse(body);
                    resolve(JSON.parse(job));
                } catch (e) {
                    reject(Error("Error using Fraudguard (check credentials provided): "+body+"("+e+")"));
                }
            }
        });
    });
    return promise;
}



exports.setUser = function(u){ user = u; }
exports.setPassword = function(p){ pass = p; }
exports.checkIP = checkIP;

/*
Output example
{ isocode: 'AU',
  country: 'Australia',
  state: 'unknown',
  city: 'unknown',
  discover_date: '2017-09-06 01:59:58',
  threat: 'botnet_tracker',
  risk_level: '5' }
*/
