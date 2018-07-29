// var data = [
//     {
//         name: "person1"
//     },
//     {
//         name: "person2"
//     }
// ];
// console.log(data);
//
// var jsonData = [
//     {
//         "name": "person1"
//     },
//     {
//         "name": "person2"
//     }
// ];
// console.log(jsonData);
//
// data = JSON.stringify(data);
//
// var newUser = {
//     name: "person name",
//     username: "username",
//     password: "password",
//     email: "email"
// }
//
// newUser = JSON.stringify(newUser);
// // send to the database
//
//
// JSON.parse(variable);


// Pure JS
// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function(){
//
//     // readyState
//     //     0 - request not initialized
//     //     1 - server connection estabished
//     //     2 - request recieved
//     //     3 - processing the request
//     //     4 - request has finished and the data/response is ready
//     //
//     // Status
//     //     200 - OK
//     //     403 - Forbidden / need to log in
//     //     404 - Not found
//
//     if(this.status == 403){
//         console.log("Forbidden, cant access information");
//         return;
//     } else if(this.status == 404){
//         console.log("ERROR, file not found");
//         return;
//     }
//
//     if(this.status == 200 && this.readyState == 4){
//         console.log(this.responseText);
//         var data = JSON.parse(this.responseText);
//         console.log(data);
//     }
// };
//
// xhttp.open("GET", "data/data.json", true);
// xhttp.send();

$.ajax({
    type: "GET",
    url: "data/data.json",
    dataType: "json",
    success: function(dataFromJSON){
        console.log(dataFromJSON);
    },
    error: function(error){
        console.log(error);
        console.log("Something went wrong with the connection");
    }
})













// //End of page
