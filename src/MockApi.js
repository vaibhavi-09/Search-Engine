var express = require('express');
var apiMocker = require('connect-api-mocker');
var app= express();
app.use('/api',apiMocker('Mock-api'));
app.listen(9000);

