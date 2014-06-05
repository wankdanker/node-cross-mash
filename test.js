var cm = require('./')
    , assert = require('assert')
    ;

var ary = [
    { name : 'Theon Greyjoy', title : 'Lord' }
    , { name : 'Daenerys Targaryen', title : 'Khaleesi' }
    , { name : 'Jon Snow', title : 'Bastard' }
    , { name : 'Tyrion Lannister', title : 'Master of Coin' }
    , { name : 'Sansa Stark', title : 'Lady' }
];

var expect = {
    'Theon Greyjoy': 'Lord'
    , 'Daenerys Targaryen': 'Khaleesi'
    , 'Jon Snow': 'Bastard'
    , 'Tyrion Lannister': 'Master of Coin'
    , 'Sansa Stark': 'Lady'
}

assert.deepEqual(cm(ary, 'name', 'title'), expect);

