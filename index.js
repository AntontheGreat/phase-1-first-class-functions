function receivesAFunction(becomeANinja) {
    becomeANinja();
}

function becomeANinja() {
    console.log("Go to Muay Thai practice");
}

function returnsANamedFunction() {
   return function becomeANinja(){};
}

function returnsAnAnonymousFunction() {
    return function(){};
}