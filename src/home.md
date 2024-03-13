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

1. Pagination is so cool but why do I have an extra empty link:
    - looking at the link it says the href = /blob/1/ which is the 1st blog?
    - looking at the nav bar I have a blank spot.
1. netlify.com forms were enabled!
    - partially working. The Thank you use to work but now it doesn't.
    - I do see the data that is posted from the form when I check the form section on netlify.
1. Not sure why the scroll bar is back.
    - What I did to fix it doesn't work now.
    - Good News is only when the screen is super small.
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



## Solved Items:

1. Pictures.md: When I removed the file I needed to restart my local dev enviroment so the _site folder could get deleted and recreated without the file.
