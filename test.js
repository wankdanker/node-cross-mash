var cm = require('./')
    , assert = require('assert')
    ;

var ary = [
    { name : 'Theon Greyjoy', name2 : 'oops', title : 'Lord' }
    , { name : 'Daenerys Targaryen', title : 'Khaleesi' }
    , { name : 'Jon Snow', title : 'Bastard' }
    , { name : 'Tyrion Lannister', title : 'Master of Coin' }
    , { name : 'Sansa Stark', title : 'Lady', title2 : 'Uh-oh' }
];

var expect = {
    'Theon Greyjoy': 'Lord'
    , 'Daenerys Targaryen': 'Khaleesi'
    , 'Jon Snow': 'Bastard'
    , 'Tyrion Lannister': 'Master of Coin'
    , 'Sansa Stark': 'Lady'
}

assert.deepEqual(cm(ary, 'name', 'title'), expect);

var expect2 = {
    'oops': 'Lord'
    , 'Daenerys Targaryen': 'Khaleesi'
    , 'Jon Snow': 'Bastard'
    , 'Tyrion Lannister': 'Master of Coin'
    , 'Sansa Stark': 'Uh-oh'
}

assert.deepEqual(cm(ary, ['name2', 'name'], ['title2', 'title']), expect2);
