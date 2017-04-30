var express = require('express');
var cfenv = require('cfenv');
var bodyParser = require('body-parser');
var https = require('https');
var fs = require('fs');
var process = require('process');
var buffer = require('Buffer');

var appEnv = cfenv.getAppEnv();
var app = express();

if (process.env['NODE_ENV'] != 'production') {
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
  var credential = appEnv.getServiceCreds(req.query.service);
  if (process.env['NODE_ENV'] != 'production') {
    credential = {
      service: req.query.service,
      username: '264789c4-3e7b-4d71-8d48-b1105d2cc284',
      password: 'GnO1mYiGP0g3',
      url: 'https://stream.watsonplatform.net/speech-to-text/api'
    }
  }

  if (!credential) {
    res.set('Conteny-Type', 'application/json');
    res.send(JSON.stringify({
      error: `No credential found for service: ${req.query.service}`
    }));
  }

  var basicAuth = new Buffer(`${credential.username}:${credential.password}`).toString('base64');
  var hostname = "stream.watsonplatform.net";
  var url = credential.url;
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
    // console.log('status code: ', res2.statusCode);
    // console.log('headers: ', res2.headers);

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

var port = app.get('port');
var enable_https = process.env['npm_package_config_https'] == 'true';

if (!enable_https) {
  app.listen(port, function () {
    console.log('HTTP listen port: ' + port);
  });
} else {
  var HOME = process.env['HOME'];

  httpsOptions = {
    key: fs.readFileSync(`${HOME}/.ssh/webserver.key`),
    cert: fs.readFileSync(`${HOME}/.ssh/webserver.pem`)
  };

  https.createServer(httpsOptions, app).listen(port, function () {
    console.log('HTTPS listen port: ' + port);
  });
}
