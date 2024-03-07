/*
//This works
fetch('https://icanhazdadjoke.com/', {
    headers: {
        "User-Agent": "Web Front End Final Project",
        "Accept": "application/json"
    },
    // method: "GET"; // Why don't we use method: "GET"?????????
})
.then((response) => response.json())
.then((data) => {
    myResult.status = true;
    myResult.id = data.id
    myResult.joke = data.joke
    
    document.querySelector(".quote").innerText = data.joke 
    
    console.log(data);
})
.catch((error) => {
    console.error('Error:', error);
    document.querySelector(".quote").innerText = "Unfortunatly the website is down.  Please try again later."
});


console.log ("dadjoke.js ran")
console.log ("myResult is not getting updated properly for some reason.  Problem with Scope!  Don't know how to solve.")
console.log ("status", myResult.status)
console.log ("id: ", myResult.id)
console.log ("joke: ", myResult.joke)
*/




/* This sample code works
fetch('https://icanhazdadjoke.com/', {
    headers: {
        "User-Agent": "Web Front End Final Project",
        "Accept": "application/json"
    },
    // method: "GET"; // Why don't we use method: "GET"?????????
})
.then((response) => response.json())
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.error('Error:', error);
});
*/




function getDadJoke_fetch(){
    var myResult = {
        "status": false,
        "id": "",
        "joke": ""
    };
    
    

    fetch('https://icanhazdadjoke.com/', {
        headers: {
            "User-Agent": "Web Front End Final Project",
            "Accept": "application/json"
        },
        // method: "GET"; // Why don't we use method: "GET"?????????
    })
    .then((response) => response.json())
    .then((data) => {
        myResult.status = true;
        myResult.id = data.id
        myResult.joke = data.joke
        
        document.querySelector(".quote").innerText = data.joke 
        
        console.log(data);
    })
    .catch((error) => {
        console.error('Error:', error);
        document.querySelector(".quote").innerText = "Unfortunatly the website is down.  Please try again later."
    });

    return myResult
}


data = getDadJoke_fetch()

document.querySelector(".quote").innerText = data.joke 

console.log ("dadjoke.js ran")
console.log ("myResult is not getting updated properly for some reason.  Problem with Scope!  Don't know how to solve.")
console.log ("status", data.status)
console.log ("id: ", data.id)
console.log ("joke: ", data.joke)
