/**
 * Created by optomatum on 6/07/16.
 */


var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('Hello express');
});
app.get('about', function (req, res) {
    res.send('about us');
});
app.listen(3000);
