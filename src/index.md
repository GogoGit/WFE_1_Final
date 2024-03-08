---
layout:  layout.html
pageTitle:  MyPageTitleHere
tags: 
  - page
  - nav
navTitle: Index
pageClass: classIndex
---



<!--
base-h1.html
base-layout.html
combined-Test-layout.html

---
layout: layout.html
pageTitle:  MyPageTitleHere
tags: 
  - page
  - nav
navTitle: NavTitle-Index
pageClass: classIndex
---





tags: [create collections name spaces] 
    Now it's a variable :)
    check out the nav section in _includes\layout.html

Note you can create your own variables their too, look at pictures.md

singleImage: /img/apples.png
images:
  - apples.png
  - apples-red.png
  - apples-group.png

    singleImage:  is a single image
    images is an array

pageClass: [Name]

This is how you create a class in the <body> where you can apply special css rules



*** _data  (Globally avialable)
    filename.json

    > so data will be available as filename.[data in json file]

    

-->





> This is a blockquote

- bullet one
- bullet two

1. list 1
1. list 2

[Home](/)

# Instructions on how to setup development environment for Final Project.

## GitHub instructions
1. Create a .gitignore file at the top level.
1. In the file, add the following:
```sh 
        node_modules
        _site
```
3. Install node module 'eleventy'
```sh 
        npm init -y (create package.json file with default default answers)
        npm install @11ty/eleventy
```
4. Modify package.json
    - replace "start" line with:  "start": "eleventy --serve"

## Eleventy Configuration
1. In root folder, create file .eleventy.js
1. In the file, add the following:
```sh 
        config.addPassthroughCopy("./src/css/");
        config.addPassthroughCopy("./src/img/");
        config.addPassthroughCopy("./src/js/");
    
        return {
            dir: {
                input: "src",
                output: "_site",
            },
        };
```
3. Eleventy is now configured
4. npm start

## Create root web page
1. In root folder, create the following folders:
    - src
        - css
            - styles.css
        - img
            - images for project in different sizes
        - js
            - scripts.js
        - pages
            - ???

## New Changes that need to be refactored
1. Adding the following node packages:
    - rimraf (used to delete files/folders, command: rm -rf)
    - sass

2. Updated the 'start' command:
    - "start": "npm-run-all -p rimraf 11ty sass"
        - npm-run-all (used becuase of the bug when using Windows vs Mac where not all packages load)
        - '-p' (run in parralell)

3. That means you need to install those packages
    - npm install @11ty/eleventy@latest
    - npm install rimraf@latest
    - npm install sass@latest

4. Added a folder 'data', need to modify eleventy.js to add that file
