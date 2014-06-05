node-cross-mash
---------------

Create a single object from an array of objects using properties from the array
objects as the key and value of the new object.

example
-------

```js
var crossmash = require('cross-mash');

var ary = [
    { name : 'Theon Greyjoy', title : 'Lord' }
    , { name : 'Daenerys Targaryen', title : 'Khaleesi' }
    , { name : 'Jon Snow', title : 'Bastard' }
    , { name : 'Tyrion Lannister', title : 'Master of Coin' }
    , { name : 'Sansa Stark', title : 'Lady' }
];

crossmash(ary, 'name', 'title');

/*
{
    'Theon Greyjoy': 'Lord'
    , 'Daenerys Targaryen': 'Khaleesi'
    , 'Jon Snow': 'Bastard'
    , 'Tyrion Lannister': 'Master of Coin'
    , 'Sansa Stark': 'Lady'
}
*/
```

license
-------

MIT
