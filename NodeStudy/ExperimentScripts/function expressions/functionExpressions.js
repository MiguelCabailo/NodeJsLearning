function callFunction(fun){
    fun();
}

var sayBye = function(){
    console.log('bye');
}

// passing a function in another function
callFunction(sayBye);