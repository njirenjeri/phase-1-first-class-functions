function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(){
    return function namedFunction(){
        return;
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        return;
    }
}