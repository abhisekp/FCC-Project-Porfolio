require.config({
    baseUrl: 'js',
    shim: {
        // app: {
        //     deps: ['es6!app']
        // },
        // modernizr: {},
        // prefixfree: {}
        es6: {
            deps: ['amd-loader']
        },
        bootstrap: {
            deps: ['jquery']
        },
        myLegacyApp: {
            exports: 'MODULE'
        }
    },
    paths: {
        'traceur-compiler': ['vendor/traceur-compiler'],
        // jquery: ['//code.jquery.com/jquery-1.11.3.min', 'vendor/jquery-1.11.3.min'],
        jquery: ['vendor/jquery-1.11.3.min'],
        modernizr: ['vendor/modernizr'],
        // bootstrap: ['//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min', 'vendor/bootstrap.min'],
        // app: ['app'],
        bootstrap: ['vendor/bootstrap.min'],
        'amd-loader': ['vendor/require/amd-loader'],
        es6: ['vendor/es6'],
        screenfull: ['vendor/screenfull'],
        sjcl: ['vendor/sjcl'],
        myLegacyApp: ['myLegacyApp']
    }
});

define('main', ['jquery', 'es6!app', 'bootstrap', 'modernizr'], function ($, App) {
    console.log('Main module started');
    $(function () {
        console.log('jQuery Loaded');
    });

    App.init('Happy!!!');
    require(['myLegacyApp'], (app) => {
        console.log('EXECUTION FROM MAIN');
        app.myMethod();
    });

    return {
        mainFunc: mainFunc
    };
});

function mainFunc() {
    console.log('Load using Circular Dependency');
}
