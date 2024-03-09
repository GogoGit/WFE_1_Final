console.log ("scripts.js ran")

// Hamburger Section
var hamburger = document.querySelector("#pull");
var body = document.querySelector("body");

hamburger.addEventListener("click", showMenu);

function showMenu(event) {
  console.log('event',event);
  console.log('event target',event.target);
  body.classList.toggle("show-nav");
  event.preventDefault();
}



function handleSubmit(event) {
  event.preventDefault();
  let fetchURL = "";

  if (document.querySelector("body").classList.contains("addBlog")){
    let fetchURL = "http://localhost:3456/apiAddBlog";
  }else if (document.querySelector("body").classList.contains("contact")) {
    let fetchURL = "http://localhost:3456/apiAddContact";
  };
  
  // WOW THIS IS AMAZING!!!
  //    So much faster vs getting each element yourself!!!!
  // The Object.fromEntries() method transforms a list of key-value pairs into an object.
  // The FormData interface constructs a set of key/value pairs representing form fields and their values
  const formData = Object.fromEntries(new FormData(event.target));
  console.log(" form data ", formData);
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



document.addEventListener("submit", handleSubmit);