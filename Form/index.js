//laying out the promise to be used later on
const serverRequest = new Promise((resolve, reject => {
    let apiServerRequest = true;
    if (apiServerRequest) {
        resolve("fetched data")
        serverRequest.then(result => {
            console.log(result);
        })
    }
}))