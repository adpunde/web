var name = 'Mango';
function favFruit1() {
    console.log('Favourite fruit: ', name);
};

var namespace1 = {};
namespace1.name = 'Mango';
namespace1.favFruit = function () {
    console.log('Favourite fruit: ', namespace1.name);
};
