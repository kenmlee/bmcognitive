# bluemix cognitive application

>You SHOULD only use this repository in development environment as it transpile typescript on browser directly. Please using Bluemix Pipeline to build and package before deploying to your production environment.

## Installation
```
yarn
```
or 
```
npm install
```

## start web app locally
```
npm run dev
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
    - Speech to Text-xx
```

Then:
```
cf push
```

## more of @angular/cli
[@angular/cli README](./angular.cli.README.md)

### Thanks
[Zero2Cognitive](https://github.com/rddill-IBM/ZeroToCognitive)

[Angular Startkit](https://github.com/angular-university/angular2-for-beginners-starter)

[Skeleton](https://github.com/dhg/Skeleton)
