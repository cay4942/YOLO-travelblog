
const destinationList = document.querySelector("#destinationList");
const buttonGo = document.querySelector("#buttonGo");
const destinationBox = document.querySelector("#destinationBox");

buttonGo.addEventListener("click", gotoPrevImage);



const destinations = [
    {
        city: "Buenos Aires",
        country: "Argentina",
        continent: "South America",
        date: "October 2016"
    },
    {
        city: "Colombo",
        country: "Sri Lanka",
        continent: "Asia",
        date: "November 2017"
    },
    {
        city: "New York City",
        country: "USA",
        continent: "North America",
        date: "February 2018"
    },
    {
        city: "Seattle",
        country: "USA",
        continent: "North America",
        date: "March 2016"
    },
    {
        city: "Pert",
        country: "Australia",
        continent: "Oceania",
        date: "October 2019"
    }
];

function fillList(destinations) {

    destinationList.innerHTML = "";
    
    destinations.forEach(function(element) {
        const newLi = `<li>${element.city}</li>`;
        destinationList.innerHTML += newLi;
    });
}

destinationBox.addEventListener("change", function() {
    if (destinationBox.value === "all") {
    
        fillList(destinations);
    
    } else if (destinationBox.value === "Europe") {
        
        const filtered = destinations.filter(function(element) {
            return element.continent === "Europe";
        });
        
        fillList(filtered);
    
    } else if (destinationBox.value === "North America") {
        
        const filtered = destinations.filter(function(element) {
            return element.continent === "North America";
        });
        
        fillList(filtered);

    } else if (destinationBox === "Asia") {
        
        const filtered = destinations.filter(function(element) {
            return element.continent === "Asia";
        });
        
        fillList(filtered);

    } else if (destinationBox === "South America") {
        
        const filtered = destinations.filter(function(element) {
            return element.continent === "South America";
        });
        
        fillList(filtered);

    } else if (destinationBox.value === "Africa") {
        
        const filtered = destinations.filter(function(element) {
            return element.continent === "Africa";
        });
        
        fillList(filtered);

    } else if (destinationBox === "Oceania") {
        
        const filtered = destinations.filter(function(element) {
            return element.continent === "Oceania";
        });
        
        fillList(filtered);
    }
    
});

fillList(destinations);
