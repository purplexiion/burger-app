//loading the DOM
document.addEventListener("DOMContentLoaded", () => {

    //declaring Variables
    const searchForm = document.querySelector("form");
    const searchResultDiv = document.querySelector(".item");
    const container = document.querySelector(".container");
    let searchQuery = parseInt("");


    //making the event listener - functioning
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        searchQuery = e.target.querySelector("input").value;
        fetchAPI(searchQuery);
    });

    //loading the API - done
    async function fetchAPI(id) {
        let baseUrl = `https://burgers1.p.rapidapi.com/burgers/${id}`;
        const response = await fetch(baseUrl);
        let data = await response.json();
        console.log(data);
        generateHTML(data);
    };

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '60a0fdf920msh68972d9786b7056p16a89fjsnca2e13235a8f',
            'X-RapidAPI-Host': 'burgers1.p.rapidapi.com'
        }
    };
data === results
    //generating the results on the web
    function generateHTML(results) {
        container.classList.remove("initial");
        let generatedHTML = "";
        console.log(results)
        let result = Object.values(results);
        console.log(result)
        for (i = 0; i < result.length; i++) {
            generatedHTML = `
             <div class = "item" >
                 <h2 class=" headings_Recipe ">Name:${result[1]} </h2>
                <p class="recipe name"></p>
                <img src ="${result[4]} " >
                <h2 class="headings-information">More information about the Burger Here</h2>
                <a class="view-btn" href="${result[3]} ">Visit their Website here</a>
                <p class="item-data">Restaurant Name:${result[2]} </p>
                 <p class="item-data">Description:${result[5]} </p>
                 <p class="item-data">Ingredients:${result[6]} </p>
             </div>                       
             `
        };
        searchResultDiv.innerHTML = generatedHTML;
        console.log(result[3])
    }

    //making the like button(done)
    (function(d, e, s) {
        if (d.getElementById("likebtn_wjs")) return;
        a = d.createElement(e);
        m = d.getElementsByTagName(e)[0];
        a.async = 1;
        a.id = "likebtn_wjs";
        a.src = s;
        m.parentNode.insertBefore(a, m)
    })(document, "script", "//w.likebtn.com/js/w/widget.js");

    //making the submit response on the contact us form(done)
    const form = document.getElementById("input")
    form.addEventListener('submit', (event) => {
        event.preventDefault();
    });

});