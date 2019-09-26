const appclass = require('./app');

appclass.checkIfUserExists("persha95","123123pp", function(err,data){
    if (err) {
        // error handling code goes here
        console.log("ERROR : ",err);
        return false;
    } else {
        // code to execute on data retrieval
        console.log("result from db is : ",data);
        return true;
    }
});


