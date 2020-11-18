# Portfolio

### Explore Stockholm, travel site
(Milestone Project 2 for Code Institute)

This is a travel website created for people planning a visit to Stockholm, the aim is for the site is helping the site user gain information about the city, suggestions of things to do and places to eat as well as aiming for visitors to book a guided tour with the site.

## UX

### User Stories

-   As a user I want the site to be clearly understood and easily navigated.
-   As a user I want to easily find the information I'm seeking. 
-   As a user I want to easily find a way to reach the contact section the site owner wherever I am on the site.
-   As a user I want to easily book a guided tour or request more information about it.

### Site Owners Stories

 - As a site owner I want the user to find the navigation throughout the site and locating the information they seek effortless. 
 - As a site owner I want the user to gain interest to the site and to book a guided tour.
 - As a site owner I want the user to easily find a way to contact me for any bookings or questions they may have. 

## Design

Index Page layout consisting of a header with a navigation menu, a hero-image, following a white background with black font throughout for the following sections.  
The different sections are divided with the same image as the hero image only  with a smaller height between the information sections using a parallax scroll effect. 
The colors are consistent with the hero image, styling the navigation, footer and different section background in a dark blue color. 

### Wireframes
-   Main and About Section - [View](style/wireframes/indexhtml.png)
-   Things To Do Section - [View](style/wireframes/todo.png)
-   Where To Eat Section - [View](style/wireframes/eat.png)
-   Guide Tours Section - [View](style/wireframes/guidetour.png)
-   Contact Form Section - [View](style/wireframes/contactform.png)

## Features

- Responsive Design throughout website.
- Contact Form 
- Google Maps to highlight areas, places and restaurant while interacting with the site
- Togglebar navigation bar in mobile view

### Future features to implement
- To make an info window appear when clicking the different markers in Google Maps no 2 and 3, instead of label.

## Technologies Used

### Languages

- [HTML5](https://en.wikipedia.org/wiki/HTML5.com)  
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [Javascript](https://en.wikipedia.org/wiki/JavaScript)

### Libraries, Frameworks and Tools/sites used

- [JQuery](https://en.wikipedia.org/wiki/JQuery) was used when writing Javascript code
- [Balsamiq Wireframes]([[https://balsamiq.com/wireframes/](https://en.wikipedia.org/wiki/Balsamiq#Balsamiq_Wireframes) was used to help create mockup and create UX-design for website
- [Google Fonts]([https://fonts.google.com/](https://fonts.google.com/) was used to import font Lora which is used as the font throughout the website, and font Rozha One was used for headlines throughout site with Serif as a backup font for both fonts. 
- [Font Awesome]([https://fontawesome.com/](https://fontawesome.com/) was used for the icons for Home (the house) and Contact (the envelope) in the navigation menu as well as the icon for the burger-menu that appears in mobile view. Fontawesome was also used for the three icons (instagram, Facebook and Pinterest) to the social media links in the footer 
- [Stackedit](https://stackedit.io/) was used to write Readme-file 
- [GitHub](https://github.com/) was used to store the projects code after being pushed from Git
- [Gidpod](https://www.gitpod.io/) was used for version control by using the Gitpod terminal to commit and push to Github
- [TinyJPG](https://tinyjpg.com/) was used to compress images to smaller sizes


## Testing

- Html-code tested with W3C Markup Validator, view result [here](https://validator.w3.org/nu/?doc=https%3A%2F%2Ffridalindstrom.github.io%2Fexplore-sthlm%2F)
- CSS-code tested with W3C CSS Validator, view result [here](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ffridalindstrom.github.io%2Fexplore-sthlm%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- Responsiveness of website was checked using [Am I Responsive?](http://ami.responsivedesign.is/)

Google Dev Tools Lighthouse was run to check accessibility of page

### Link Testing 

#### Navigation bar 
- Clicking on the logo transports the user to the top of site if currently on another part of the site
- Clicking on the house-icon transports the user to the top of site when on another part of the site
- Clicking on About the City in Navigation bar transports the user down to the About The City section
- Clicking on Things To Do in Navigation bar transports the used to the Things To Do section
- Clicking on Where To Eat in Navigation bar transports the user to the Where To Eat section
- Clicking on Guided Tours in Navigation bar transports the user to the Guide Tours section
- Clicking on the envelope in the Navigation bar transports the user to the Contact Form

#### About the City Section

- Google Maps is working correctly, each link in the menu makes the Google Map narrow in on the selected neighborhood and on each click a div fades in below map with information and photos about the selected neighborhood. 

#### Where To Eat Section

- Google Maps is working correctly, each link in the menu makes Google Map Markers appear on the map and a div fades in below the Google Map with information and photos about the selected eateries. 

#### Contact Form

- Typing in name, email and message and pressing send, form is cleared after send 
- Typing in wrong email address message will pop up that email is not correctly filled in
- Leaving name empty message will pop up that name needs to be filled in
- Leaving message empty a message will pop up that message needs to be filled in


#### Footer

-  Clicking on the Instagram icon the user is directed to Instagram's Homepage in a new browser
-  Clicking on the Facebook icon the user is directed to Facebook's Homepage in a new browser
- Clicking on the Pinterest icon the user is directed to Pinterest's Homepage in a new browser

#### Further Testing

-The Website has been tested on Google Chrome, Internet Explorer and Safari browsers.
-The website has been tested on Iphone 6s, 8, and 12, Samsung Galaxy S9, Motorola G7+, Huawei p30 Pro, OnePlus 6

### Known Bugs
- Hero-image is pixelated and not showing correctly when viewed on either model of the three Iphones, all other 
mobile brands as well as all three browsers shows hero-image perfectly. 
In Chrome Dev Tools this did not occur when choosing iphone as mobile view. 
- 
## Deployment

### GitHub Pages
1. On GitHub, navigate to the site's repository.
2.  In repositories site click  **Settings**, it is located on the far right in the menu-tab.
3. Once clicked to Settings, scroll down to "GitHub Pages", use the **Source** drop-down menu and select a publishing source (main).
4. A new menu pops up to the right of the source drop down menu, select **/roots** in the menu and then press **Save**.
5. Page will be up and running shortly. 
6. Scroll down on Settings-page to find the address to the published website.
7. If not working straight away try adding /index.html to the address in browser and that should work. 

## Credits

### Content

Content collected from [Wikipedia](https://www.wikipedia.org/) , [Visit Stockholm] (https://www.visitstockholm.com/), ad well as some of the websites to the restaurants displayed on site. 
(Just to clarify, I usually don't copy others work and will later on write my own text all throughout the site if using it for anything else than for educational purposes. 
Copying was done so that I could focus more time on the code)

### Code 

- Tutorial help and code for contact-form from w3schools, view tutorial [here](https://www.w3schools.com/howto/howto_css_contact_form.asp)
- Code and instructions with setting up and connecting EmailJs to the document was found at [EmailJs.com](https://www.emailjs.com/docs/tutorial/creating-contact-form/) as well as Code Institute lectures.
One thing I struggled with was making the contact form work once I deployed the site, I came across [this](https://stackoverflow.com/questions/58789965/confirmation-message-not-displaying-on-javascript-contact-form) in StackOverflow forum which helped add the last line of code to make the page reset after pressing send button. 
(Therefore you'll see a lot of small changes and commits after deployment trying to make this code work.)
- Adding Google Maps API was done with the instructions and code from [Google Maps Javascript Api](https://developers.google.com/maps/documentation/javascript/adding-a-google-map) as well as searching [StackOverflow](https://stackoverflow.com/questions) forum to gain more knowledge about Javascript coding for google maps.
Also some information to help me solve an error regarding initMap when testing was found on StackOver Forum, se thread [here](https://stackoverflow.com/questions/32496382/typeerror-window-initmap-is-not-a-function)
- Information and code for image gallery was found at w3schools.com, view [here](https://www.w3schools.com/css/css_image_gallery.asp) which I then adjusted to my site.
- Information and code for the burger menu was found on W3schools.com [here](https://www.w3schools.com/jquery/jquery_slide.asp) as well as additional information to help me regarding the code for the window size found [here](https://stackoverflow.com/questions/28392090/java-script-functionality-only-in-mobile-device)

### Media

- Hero-image photo by [Jon Flobrant](https://unsplash.com/@jonflobrant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/stockholm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

- All other media was created by the developer.

### Acknowledgements
- Thank you to my mentor for valuable help and input throughout the project. 

### Own Reflections 
I struggled a lot in this module lectures with learning and understanding Javascript, leading to a lack of time in the end for the project. 
I am sure there are easier ways to write the Js code which I will learn over time and return to this site to rewrite but considering the 
struggle I've had (and still have to be honest) I am proud I got this much js to work. 
I have searched a lot of forums and websites to find information and better understand writing Javascript code and I hope I have managed to 
gather all the code and media I have used for helping me understanding writing the code better.
There is also some features I would have liked to implement but struggling to write a working code combined with lack of time before deadline 
left that for future features to implement instead. 

