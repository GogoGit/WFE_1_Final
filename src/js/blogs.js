function getBlogs(){
    fetch('/data/blogs.json')
    // fetch('/data/Text.txt')
    .then(response => response.json())
    // .then(response => response.text())
    .then(data => {
        console.log("data")
        console.log(data);
        
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