require.config({
    shim: {
        myLegacyApp: {
            exports: 'MODULE'
        }
    },

    paths: {
        myLegacyApp: ['myLegacyApp']
    }
});

define('app', ['myLegacyApp'], (app) => {

    // console.log(app._private);
    console.log('EXECUTION FROM APP');
    app.myMethod();
    console.log('BEFORE SEAL: ' + (app._private && app._private.name));
    app._seal(true);
    console.log('AFTER SEAL: ' + (app._private && app._private.name));
    app._unseal(true);
    console.log(app._private && app._private.name);

    return {
        init: init
    };
});

function init(arguments) {
    var myApp = require(['myApp'], (my) => {
        console.log(my.name);
    });

}
