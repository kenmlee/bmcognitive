var express = require('express');
var cfenv = require('cfenv');
var bodyParser = require('body-parser');
var https = require('https');
var process = require('process');

var appEnv = cfenv.getAppEnv();
var app = express();

if (process.env['NODE_ENV'] != 'prodction') {
  var cors = require('cors');
  app.use(cors());
}

app.use(express.static(__dirname + "/dist"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.set('appName', 'simple-bluemix-dev');
app.set('port', appEnv.port);

var router = express.Router();
router.get('/cfenv', function (req, res) {
  res.set('Content-Type', 'text/plain');
  res.send(appEnv);
});

router.get('/token', function (req, res) {
  var basicAuth = req.query.basicauth;
  var hostname = "stream.watsonplatform.net";
  var url = req.query.url;
  var type = req.query.type;
  var path = `/authorization/api/v1/token?url=${url}`;
  if (type === "gateway") {
    hostname = "gateway.watsonplatform.net";
  }

  var options = {
    hostname: hostname,
    path: path,
    method: 'GET',
    headers: {
      Authorization: "Basic " + basicAuth
    }
  };

  var req = https.request(options, (res2) => {
    console.log('status code: ', res2.statusCode);
    console.log('headers: ', res2.headers);

    res2.on('data', (d) => {
      res.set('Conteny-Type', 'application/json');
      res.send(d);
    });
  });

  req.on('error', (e) => {
    console.error(e);
  });
  req.end();
});

app.use(router);

app.listen(app.get('port'), function () {
  console.log('Listen port: ' + app.get('port'));
})
