var name = 'Water melon';
function favFruit2() {
    console.log('Favourite fruit: ', name);
};

var namespace2 = {};
namespace2.name = 'Water melon';
namespace2.favFruit = function () {
    console.log('Favourite fruit: ', namespace2.name);
};
