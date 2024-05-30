import React from 'react'
import _ from 'lodash';
function Lodash() {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    let filterArr = _.filter(arr, (num) => num > 2);
    console.log(filterArr);
    let mapArr = _.map(arr, (num) => num);
    console.log(mapArr);
    let sortArr = _.sortBy(arr, (a, b) => b - a);
    console.log(sortArr);

    let chunkArr = _.chunk(arr, 2);
    console.log(chunkArr);
    let compactArr = _.compact([0, 1, false, 2, '', 3, '4']);
    console.log(compactArr); // removes falsy values 

    var array = ['a','b','c','d',1,2,5,7];
    var other = _.concat(array, arr);
    console.log(other); 

    let diffArr=_.difference(arr, array)
    console.log(diffArr); //removes common and give from first arg

    let dropArr=_.drop(arr)
    console.log(dropArr); //removes first element

    let dropArr1=_.drop(arr,3)
    console.log(dropArr1); //removes 3 elements

    let dropRight=_.dropRight(arr,3)
    console.log(dropRight); //removes 3 elemtns from right

    // let fill=_.fill(arr, 'a');
    // console.log(fill);

    let flat=_.flatten([1, [2, [3, [4]], 5]]);
    console.log(flat);

    let flatDeep=_.flattenDeep([1, [2, [3, [4]], 5]]);
    console.log(flatDeep);

    let Obj=_.fromPairs([['a', 1], ['b', 2]]);
    console.log(Obj);

    let index=_.indexOf(arr,5);
    console.log(index);
    return (
        <div>Lodash</div>
    )
}

export default Lodash