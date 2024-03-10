//Variables


//Functions
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

function populateBlogs(objData){
    if (objData === null){
        console.warn("Problem Loading Blog Data, Update User with message... maybe image of indicating problem");
        return;
    };

    let HTML = "";
    
    //sort data
    objData.sort(function(a, b) {
        var c = new Date(a.date);
        var d = new Date(b.date);
        return d-c;
    });

    //Create HTLM for blogs
    myHTML = formatBlogData(objData);
    document.querySelector(".blogData").innerHTML = myHTML;
}

function formatBlogData(datas){
    let myHTML = "";
    let today = Date.parse(Date());

    for (const data of datas) {
        //Do not show future blogs
        let articleDate = Date.parse(data.date);

        if (today > Date.parse(data.date)){
            myHTML += `
            <article>
                <h2>${data.title}</h2>
                <h3><time datetime="${data.date}">Date: ${data.date}</time></h3>`
    
                if (data.hasOwnProperty("image")){
                    let myAlt = "Unknown"
                    if (data.hasOwnProperty("image_description")){
                        myAlt ="${data.image_description}"
                    }
                    myHTML += `<img src="${data.image}" alt="$(myAlt)">`
                };
    
            myHTML += `    
                <p>${data.body}</p>
            </article>`
        }
    };

    return myHTML
}


//Event listeners


//Code Execution
getBlogs();