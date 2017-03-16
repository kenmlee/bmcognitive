# bluemix-dev
A simple start kit for web-app@bluemix with Nodejs+Angular+Skeleton.

>You SHOULD only use this repository in development environment as it transpiler typescript on browser directly. Please using Bluemix Pipeline to build and package before deploying to your production environment.

## Installation
```
npm install
```

## start web app locally
```
npm start
```

## deploy to bluemix
Changing configurations in manifest file like this and replacing contents in < >:
```
applications:
- path: .
  memory: 128M
  instances: 1
  domain: mybluemix.net
  name: <your-application-name>
  host: <your-application-sub-domain-name>
  disk_quota: 1024M
  services:
    - <Any services you want to connect>
```

Then:
```
cf push
```

### Thanks
[Zero2Cognitive](https://github.com/rddill-IBM/ZeroToCognitive)

[Angular Startkit](https://github.com/angular-university/angular2-for-beginners-starter)

[Skeleton](https://github.com/dhg/Skeleton)
