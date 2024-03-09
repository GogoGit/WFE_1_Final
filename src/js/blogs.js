function populateBlogs(objData){
    if (objData === null){
        console.warn("Problem Loading Blog Data, Update User with message... maybe image of indicating problem");
        return;
    };

    let myHTML = ""
    
    for (const data of objData) {
        // console.log(element);
        myHTML += `
        <article>
            <h2>${data.title}</h2>
            <h3><time datetime="${data.date}">Date: ${data.date}</time></h3>`

        
        if (data.hasOwnProperty("image")){
            let myAlt = ""
            if (data.hasOwnProperty("image_description")){
                myAlt ="${data.image_description}"
            }else{
                myAlt ="Unknown"
            };
            myHTML += `<img src="${data.image}" alt="$(myAlt)">`
        };

        
        myHTML += `    
            <p>${data.body}</p>
        </article>
        `

        //Update Blog
        document.querySelector(".blogData").innerHTML = myHTML;
      };

    // console.log("Populate Blog Data with....");
    // console.log(myHTML);
}



function getBlogs(){
    fetch('/data/blogs.json')
    // fetch('/data/Text.txt')
    .then(response => response.json())
    // .then(response => response.text())
    .then(data => {
        populateBlogs(data);
    })
    .catch(error => {
        console.log(error);
    })
}

getBlogs();


// function addPost(e){
//     e.preventDefault();

//     let title = document.getElementById('title').value;
//     let body = document.getElementById('body').value;

//     fetch('', 
//         {
//             method:'POST',
//             headers: {
//                 'Accept': 'application/json, text,plain, */*',
//                 'Content-type':'application/json'
//             },
//             body:JSON.stringify({title:title, body:body})
//         }
//     )
//     .then((response) => response.json())
//     .then((udpate) => console.log(udpate))
// }


//event listeners
// document.getElementById('addPost').addEventListener('submit', addPost)


console.log("blogs.js ran")