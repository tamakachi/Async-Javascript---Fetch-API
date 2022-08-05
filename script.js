// Fetch Api
// Fetch(endpoint), .then once it completes, return the response.json because response.json is a promise
// And promises can't be directly accessed, to access it, another .then onto fetch is used with a callback function
// The argument used in the second .then will hold the response json objects

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) =>{ return response.json()})
  .then((json) => {console.log(json)})
  .catch((err) => {console.log("Error occured ", err)})