var MODULE = ((my, $, undefined) => {

    // if private var defined in my module, use that
    // else create a private var
    var _private = my._private = my._private || {},
        _seal = my._seal = function seal(seal) {
            if (!seal) {
                return;
            }

            delete my._private;
            delete my._seal;
            console.log('SEALED');
        },
        _unseal = my._unseal = function unseal(unseal) {
            if (!unseal) {
                return;
            }

            my._seal = _seal;
            my._private = _private;
            console.log('UNSEALED');
        };

    var name = 'Tonny Frank';
    _private.name = 'This is a private name: ' + name;

    _private.reverse = function reverse(str) {
        return str.split('').reverse().join('');
    };

    if ($ === undefined) {
        return;
    }

    $(() => {
        var $h1 = $('.card').children('h1');
        $h1.html(_private.reverse($h1.html()));
    });

    console.log(my);
    my.myMethod = () => {
        console.log('MODULE myMethod Executed');
    };

    return my;
})(MODULE || {}, jQuery);
