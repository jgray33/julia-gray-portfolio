console.log("connected")

let projects = [{
    image: "\assets/images/coding-quiz.png",
    title: "Coding Quiz",
    text: "A quiz powered by Javascript",
    pageLink: "https://jgray33.github.io/coding-quiz/",
    gitHubLink: "https://github.com/jgray33/coding-quiz",
},
{
    image: "\assets/images/weather-dashboard.png",
    title: "Weather Dashboard",
    text: "A weather app which displays the current and a five-day forecast",
    pageLink: "https://jgray33.github.io/weather-dashboard/",
    gitHubLink: "https://github.com/jgray33/weather-dashboard",
},
{
    image: "\assets/images/show-me-more.png",
    title: "Show me more",
    text: "A website that shows the user more about the actors in a film or tv series.",
    pageLink: "https://jgray33.github.io/show-me-more/",
    gitHubLink: "https://github.com/jgray33/show-me-more",
}]



$(document).ready(function(){
    cardNumber = 0
    console.log(cardNumber)
    loadCards()})


let cardNumber = 0
function loadCards(){
                                     $(".work-cards").html(
        `<div class="card">
          <img src="${projects[cardNumber].image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${projects[cardNumber].title}</h5>
            <p class="card-text">${projects[cardNumber].text}</p>
            <div class="flexbox">
            <a id="pageLink" href="${projects[cardNumber].pageLink}" class="link-button">Visit the page</a>
            <a id="gitHub" href="${projects[cardNumber].gitHubLink}" class="link-button">GitHub repository</a>
            </div>
            <div class="right-arrow">
               <button class="button" id="more-work-button">More work &nbsp<i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>`)
        $("#more-work-button").click(() => {
        cardNumber++
        loadCards()
        })}
    

$("#more-about-me-button").click(() => {
    $(".bio").html("I am an active person and love being outdoors; I play rugby; run regularly and am a  keen cyclist. This year, I cycled from Land's End to John O'Groats carrying everything on my bike. It took 16 days covering over 1,000 miles")
})



   


