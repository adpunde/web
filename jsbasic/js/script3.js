(function (window) {
    var namespace3 = {};
    var name = 'Mango';
    namespace3.favFruit = function () {
        console.log('Favourite fruit: ', name);
    };
    console.log('Inside IIFE');
    window.namespace3 = namespace3;
})(window);
