(function (global) {

    //map tells the System loader where to look for things
    var map = {
        '@angular': 'node_modules/@angular', // sufficient if we didn't pin the version
        '@angular/router': 'node_modules/@angular/router',
        '@angular/forms': 'node_modules/@angular/forms',
        // 'angular2-in-memory-web-api': 'https://npmcdn.com/angular2-in-memory-web-api', // get latest
        'rxjs': 'node_modules/rxjs',
        'ts': 'node_modules/plugin-typescript/lib',
        'typescript': 'node_modules/typescript',
        'moment': 'node_modules/moment',
        'lodash': 'node_modules/lodash',
        // 'recordrtc': 'node_modules/recordrtc',
    };

    //packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'rxjs': { main: 'Rx.js', defaultExtension: 'js' },
        'ts': { main: 'plugin.js', defaultExtension: 'js' },
        'typescript': { 
            main: 'lib/typescript.js', 
            defaultExtension: 'js', 
            meta: {
                "lib/typescript.js": {
                    "exports": "ts"
                }
            }
        },
        'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
        'moment': { main: 'moment.js', defaultExtension: 'js' },
        'lodash': { main: 'lodash.js', defaultExtension: 'js' },
        // 'recordrtc': { main: 'RecordRTC.js', defaultExtension: 'js'},
    };

    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        // 'router-deprecated',
        'router',
        'upgrade',
    ];

    // Add map entries for each angular package
    ngPackageNames.forEach(function (pkgName) {
        map['@angular/' + pkgName] = 'node_modules/@angular/' + pkgName;
    });

    // Add package entries for angular packages
    ngPackageNames.forEach(function (pkgName) {
        // Bundled (~40 requests):
        packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };

        // Individual files (~300 requests):
        //packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    // No umd for router yet
    // packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };

    // Forms not on rc yet
    packages['@angular/forms'] = { main: 'index.js', defaultExtension: 'js' };

    var config = {
        // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
        transpiler: 'ts',
        typescriptOptions: {
            tsconfig: true
        },
        meta: {
            'typescript': {
                "exports": "ts"
            }
        },
        map: map,
        packages: packages
    };

    document.SYSTEMJS_CONFIG = config;

})(this);

