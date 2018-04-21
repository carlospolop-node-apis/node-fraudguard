# Node Fraudguard

Use Node to check for malicious IPs in [fraudguard](https://fraudguard.io/)

## Install
`npm install fraudguard`

## How to use

```javascript
const fraudguard = require('fraudguard');

fraudguard.setUser("<YOU USER>")
fraudguard.setPassword("<YOUR PASSWORD>")

// Use checkIP(<IP>) to check that IP against fraudguard.io
// A promise will be returned
ip = "123.123.123.123";
fraudguard.checkIP(ip).then(function(result){ 
        console.log(result);
    }, function(err) {
        console.log(err);
});


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
```
