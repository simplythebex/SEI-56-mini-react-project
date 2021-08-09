# Project 2: NewsApp

NewsApp uses the Guardians API to show the user the latest news stories in the UK. The user is able to search for topics they are interested in, as well as save news articles to be accessed again.

This was a hackathon style project, it was paircoded throughout with my partner and I taking it in turns to either write the code or to provide support and check for errors. We used zoom and VSCode’s live share feature to collaborate on this project, and it was completed in 48 hours.

The technologies used were HTML, SASS, JavaScript, React, and the Guardian API.

## Brief

Using an external API create an app with multiple components, a router and several pages. 
The app should be created using JavaScript, React and HTML/CSS for styling.

## Technologies

- JavaScript
- React
- HTML
- CSS
- SASS
- Bulma

## Approach 

### Planning and designing the app

My partner and I decided we wanted to create an informative app with a clean design and clear UI. We chose a grey and aqua colour scheme and took a minimalistic approach to the design.
We chose to use a mix of Bulma and CSS to style the app, as this allowed us to style efficiently, while giving flexibility to change elements where Bulmas styling did not fit our design.

### Pair-Programming

We chose to pair program the entire app, in order to allow bugs to be fixed more quickly with two pairs of eyes. We took it in turns to code, but used the live share feature in VScode when styling so that each of us could style elements separately. 

Our initial plan was to use the Guardian’s API to display news stories in an index page. From there the user can search for topics that interest them. When clicked, a news article will display further information and the user is also able to access the story on the Guardian’s own website for further information. 

Once our MVP was met I took the lead in developing a save feature, with the intention to allow the user to save their favourite news stories to be read at a later date. When the ‘save article button’ is clicked, information about the article is set to state and then saved to local storage. From there the data can be accessed and displayed when viewing the ‘saved stories’ page.

### Displaying data on the index page

Initially we used a basic request to the API, to get an overview of all news stories held in the API and display these, however after reading further into the documentation I found a way of using a search function in the request, meaning we could display results from a search using a new GET request from the API, rather than filtering the data from a more generic GET request.

<img width="1044" alt="API GET requests" src="https://user-images.githubusercontent.com/73421779/128715247-31f64225-eed1-4b0d-a4b4-272d89de5efe.png">


When a user submits a search term, this is set to state. The useEffect shown above is dependent on the search term, therefore when this is changed a new request to the API is carried out. If a search term has been set to the ‘search’ variable, the GET request will be performed to a specific url which allows a search term to be specified. If there is no search term, a generic GET request will be carried out.

In both cases the results of the GET request will be set to state and displayed.

![Index Page Screenshot](https://user-images.githubusercontent.com/73421779/128715397-5559f8c6-3fde-4721-8454-293e3f6ea1fa.png)

### Making specific GET requests

To display a detailed version of each news story, we wanted to make a get request for that specific story. Again, reading the API documentation showed that it is possible to use the ID in the GET request to achieve this. To get the ID we included the ID in the URL of the specific news story, so that when the user navigated to the news story, the ID was accessible in the URL:

<img width="548" alt="Link to detailed view" src="https://user-images.githubusercontent.com/73421779/128715652-06944e6f-4566-4c91-b0e2-5395124651f6.png">

In a separate component, uselocation() is used to get the ID from the URL once the user has navigated to a specific story. This is then used in a GET request to get and display the data from the API.

<img width="1096" alt="Specific GET request" src="https://user-images.githubusercontent.com/73421779/128715747-0de9ef6c-c887-418e-8fa6-e6636d62b6e8.png">


## Bugs

Unfortunately the 48 hour time limit restricted the time we had to fix problems with the app. When implementing the save feature my partner and I realised that when the user saves a news article it overwrites the article that is currently in local storage. To fix this I intend to research how to save an array to local storage and to update the array with new additions, rather than overwrite it. 

A further bug is that when an article does not have a thumbnail attached in the API it will display a broken link. This does not look nice on the webpage, and occurs fairly often when the Guardian publishes corrections as these do not have associated images. There are two possible solutions I have thought about. The first would be to create an image to display on this occasion, and use logic to attach this image to the display card and show page when there is no image present. I began implementing this fix during the project but did not have time to make it work successfully. Another option would be to filter out any news stories that do not have an image, and not display these at all. 

## Wins and Challenges

A big win for me in this project was creating an aesthetically pleasing and responsive app. It was important to me that the site would be functional and look good when displayed on any device, not just on a large screen, as my intention for this app would be for users to access the latest new stories when on the move. I am happy that I met my goals in this respect. 

Another win was the use of local storage to use the save feature. I had to research ways to do this and to understand how the local storage works. While it was a challenge to get the save feature working perfectly, I am excited to continue working on this as the feature improves the experience when using the app.

A big challenge of this project was understanding the API. The API has an unusual way of displaying IDs of the articles, which made accessing individual articles a challenge. It was important that we overcame this so that users could view further details of each article. 

<img width="586" alt="ID in Insomnia" src="https://user-images.githubusercontent.com/73421779/128715903-084e7b77-1271-4c06-9e08-1546237e81b4.png">

The API itself was also a challenge to navigate, therefore we spent some time reading the documentation and in insomnia navigating through the API. While it took some time to work out how to use the API to get the information we wanted to display, it was a big win that we managed to do so. 

## Future

In the future I would like to add filters to the app so that the user can view new stories about specific topics, for example “healthcare” or “technology”. I think this functionality would make the app more enjoyable to use. Each article in the API has a “sectionId” and a “sectionName” which could be used to filter the results by topic. Below is an example of request data in insomnia, including the “sectionId” and “sectionName” keys.

<img width="707" alt="Insomnia request" src="https://user-images.githubusercontent.com/73421779/128715944-857affb4-ed8d-4c2c-8d75-76ef345f5a9e.png">

