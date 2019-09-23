const appclass = require('./app');

//appclass.insertUser('persha95','persha95@gmail.com','123123pp');
//console.log('insert user works!');

if (appclass.fetchUser('persha95','123123pp')) {
    console.log("true");
} else {
    console.log("false");
}
