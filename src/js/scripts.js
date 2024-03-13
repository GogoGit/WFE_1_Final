//Import Statements
// import { getBlogs } from "./modules/blogs.js"

//Variables
var hamburger = document.querySelector("#pull");
var body = document.querySelector("body");


//Functions
// Hamburger Section
function showMenu(event) {
  console.log('event',event);
  console.log('event target',event.target);
  
  body.classList.toggle("show-nav");
  
  event.preventDefault();
}

function handleSubmit(event) {
  console.log(event);
  event.preventDefault();
  let fetchURL = "";

  if (document.querySelector("body").classList.contains("addBlog")){
    let fetchURL = "http://localhost:3456/apiAddBlog";
  }else if (document.querySelector("body").classList.contains("contact")) {
    let fetchURL = "http://localhost:3456/apiAddContact";
  };
  
  // WOW THIS IS AMAZING!!!
  //    So much faster vs getting each element yourself!!!!
  //      let title = document.getElementById('title').value;
  //      let body = document.getElementById('body').value;
  //      body:JSON.stringify({title:title, body:body})
  // The Object.fromEntries() method transforms a list of key-value pairs into an object.
  // The FormData interface constructs a set of key/value pairs representing form fields and their values
  const formData = Object.fromEntries(new FormData(event.target));
  //console.log(" form data ", formData);
  fetch(`${fetchURL}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
        console.error('I believe you need to have a valid API URL to post to???:', error);
  });
}


//Event listeners
document.addEventListener("submit", handleSubmit);  //Submit on Forms
hamburger.addEventListener("click", showMenu);      //Nav Bar

//Need to figure this out!
// document.addEventListener("click", function(event){
//   if (event.target.innerText.includes('Blog')){
//     getBlogs();
//   } else {
//     console.log(event.target)
//   }
// });




//Code Execution
