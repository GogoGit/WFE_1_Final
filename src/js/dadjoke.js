//Variables


//Functions
function getDadJoke_fetch(){
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            "User-Agent": "Web Front End Final Project",
            "Accept": "application/json"
        },
        // method: "GET"; // Why don't we use method: "GET"?????????
    })
    .then(function(response){
        return response.json();
    })
    .then(
        function(data){
            //make an external function here and then this will change the scope!!!!!  
            document.querySelector(".quote").innerText = data.joke
        }
    )
    .catch(
        function(error){
            console.error('Error:', error);
            document.querySelector(".quote").innerText = "Unfortunatly the website is down.  Please try again later."            
        }
    );
}


//Event listeners


//Code Execution
getDadJoke_fetch()