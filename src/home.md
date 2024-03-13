---
pageTitle: Home
navTitle: Home
pageClass: home
date: 2010-01-01
permalink: /
layout: layouts/layout.html
tags:
  -page
  -nav
---

<!-- 'permalink: /' is what tells eleventy to render this file as the top level (index.html)  -->


## Home Page!
> This is a blockquote

- bullet one
- bullet two

1. list 1
1. list 2


## So Many Questions

1. Not sure why the scroll bar is back.
    - What I did to fix it doesn't work now.
1. Console Error now with srcset:
    - failed parsing 'srcset' attribute value since it's 'w' descriptor is invalid.
    - Partly solved:  removed the w from '200vw' for example.
    - Still need the last srcset option to have '900vw' so at the largest size, images still load.
1. .scss clean up, how do I handle media queries?
    - you should integrate them into the main tags.
    - Not sure why figure section is not working with @media queries.
1. Nav Bar:  How do you order the sequence properly?
    - Currently it uses the creation date it was created
    - Need to use Templating Language to sort it.
1. Contact Us
    - Why is the contact page not indented properly.  It has an extra <p> tag in it.
    - This looks like a good mystery..(Double Check did you delete and leave something behind???)
1. Add Blog
    - Why does the button seem indented a little?
1. Blog
    - using 'srcset', why do the images not work when on a large screen?  I needed to use 'size' vm VS 'size' m?
1. What do I do about the root file???



## Solved Items:

1. Pictures.md: When I removed the file I needed to restart my local dev enviroment so the _site folder could get deleted and recreated without the file.
<!-- [Home](/) -->


<!--
navTitle: Index
permalink: /

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

