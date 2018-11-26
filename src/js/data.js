// Java Script Login Page

// Setting Variables
const url = 'http://phorest-ob-staging.com/wp-json/wp/v2/posts/';
const options= {method:null,headers:{name:null,value:null}};

// Layout of the fetch function
function fetch(url, options) 
{
  return new Promise(function(resolve, reject) 
  {
    var Req = new XMLHttpRequest();
    Req.open("GET", url); 
    Req.onload = function () {
      if (Req.status >= 200 && Req.status < 300) {
        resolve(JSON.parse(Req.response));
      } else {
        reject({
          status: Req.status,
          statusText: Req.statusText
        });
      }
    };
    Req.send();
  }); 
}


// Function called after the login button is pressed.
function check(form)
{  
  
  // Fetch called 
  fetch(url,options)
  .then(function(data)
  {  
	console.log(data);
}}
