


//set variable
let firstName = document.getElementById('fname');
let lastname = document.getElementById('lname');
let email = document.getElementById('userEmail');
let password = document.getElementById('userPassword'); 
let birthday = document.getElementById('bday');
let submitButton = document.getElementById('submitButton');
let reset = document.getElementById('reset');
//function for validation














//laying out the promise to be used later on
const serverRequest = new Promise((resolve, reject => {
    let apiServerRequest = true;
    if (apiServerRequest) {
        resolve("fetched data")
        serverRequest.then(result => {
            console.log(result);
        })
    } // else statement will be there if the server can't be resolved
      else {
        reject ("coudln't fetch the data")
        //telling server to catch the error
        promise.apiServerRequest.catch(error)
        mypromise.catch(error => {

            //display the error
            console.log(error); 
        })
      }
}))