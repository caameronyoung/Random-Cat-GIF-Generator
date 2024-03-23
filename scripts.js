//random cat gif api
//23rd march 2024
//define GIPHY Search Parameters
let query = "cat animal";
let rating = "g";

const catButton = document.getElementById('button');

catButton.addEventListener('click', generateCat); //on click event for the cat button


function generateCat()
{
    const request = new XMLHttpRequest;
    request.open("GET", 'https://api.giphy.com/v1/gifs/random?api_key=BxH7WTBjGQWdPLjnqYxxEBg3FDK2e7eD&tag=' + query + '&rating=' + rating, true); //initialises a new request URL
    //this url is made with GIPHY SDK and API to be a random gif with x tags and y rating.
    request.onload = function() //run this error check when the request is loading after sending
    {
        if (request.status >=200 && request.status < 400) //to check if the connection is OK. 200 -> OK; 400 -> client side error
        {
            //i chose a small image for load times :)
            gif = JSON.parse(request.responseText).data.images.downsized.url; //searches for the correct element in the json
            //console.log(gif); //checking it is a valid link
            document.getElementById('giphyme').innerHTML = '<center><img src = "'+gif+'" alt="random gif from GIPHY"></center>';
        }
        else
        {
            console.log('error'); //if the request status is not OK
        }
    };
    request.onerror = function() //if there is a connection issue
    {
        console.log('error');
    };
    request.send(); //send request to giphy
}