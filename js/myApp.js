define('myApp', () => {
    console.log('My App Loaded');
    require(['main'], (main) => {
        console.log('Circular Dependency');
        main.mainFunc();
    });
    return {
        name: 'My App'
    };

});
