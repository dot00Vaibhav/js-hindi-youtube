//Immeadiately Invoked Function Expression (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    //unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )("hitesh");

