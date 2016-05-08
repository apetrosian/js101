function daley(n) {
    while(n > 0) {
        n--;
    }
}


// sync

[1,2,3].forEach(function(){
    console.log('processing sync');
    //daley(1);
});


// async

function asyncForEach(arr, cb) {
    arr.forEach(function(){
        setTimeout(cb,0);
    });
}

asyncForEach([1,2,3], function(){
    console.log('processing async');
    //daley(1);
});
