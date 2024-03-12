//Variables


//Functions
function getBlogs(){
    fetch('/data/blogs.json')
    .then(response => response.json())
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
                    let myAlt = "Unknown";
                    let mySrcSet = "";
                    if (data.hasOwnProperty("image_description")){
                        myAlt =`${data.image_description}`
                    }

                    if (data.hasOwnProperty("image_srcset")){
                        mySrcSet = `srcset="${data.image_srcset}"`
                    }

                    myHTML += `<figure><img src="${data.image}"
                        alt="${myAlt}"
                        ${mySrcSet}
                        ></figure>`
                };
    
            
            myHTML += formatBlogData_Text(data.body)
            myHTML +=`</article>`
        }
    };

    return myHTML
}

function formatBlogData_Text(bodyData){
    let arrData = bodyData.split("\n");
    let htmlData = ""
    arrData.forEach((item) => {htmlData += `<p>${item}</p>\n`});
    return htmlData
}

//Event listeners


//Code Execution
getBlogs();