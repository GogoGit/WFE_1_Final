


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
            <p><time datetime="${data.title}">${data.title}</time></p>`

        
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

    console.log("Populate Blog Data with....");
    console.log(myHTML);
}



function getBlogs(){
    fetch('/data/blogs.json')
    // fetch('/data/Text.txt')
    .then(response => response.json())
    // .then(response => response.text())
    .then(data => {
        console.log("data");
        console.log(data);
        console.log(typeof data);
        populateBlogs(data);
        // let output = '<h2>Blog Entries<h2>';
    })
    .catch(error => {
        console.log("error");
        console.log(error);
    })
}

getBlogs();


console.log("blogs.js ran")
// var path = document.location.pathname;
// console.log(path);