// Add your functions here
function map(array, callbackFn) {
    const r = [];
    for (const ele of array) {
        r.push(callbackFn(ele))
    }
    return r;
}

function reduce(array, callbackFn, startingPt) {
    let memo;
    let indx;

    if (!!startingPt) {
        memo = startingPt;
        indx = 0;
    } else {
        memo = array[0];
        indx = 1;
    }

    for (indx; indx < array.length; indx++) {
        memo = callbackFn(memo, array[indx]);
    }
    return memo;
}