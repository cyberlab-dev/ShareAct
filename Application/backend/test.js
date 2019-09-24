const appclass = require('./app');

//appclass.insertUser('persha95','persha95@gmail.com','123123pp');
//console.log('insert user works!');
//var something = appclass.authUser('persha95','123123pp');

//if (something) {
//    console.log(something);
//} else {
//    console.log("falsefalsefalsefalse");
//}
if (appclass.checkIfExists("persha95","123123pp")) {
    console.log("true");
} else {
    console.log("falsefalsefalse");
}

