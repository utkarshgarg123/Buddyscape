const greeting = document.querySelector('.greeting');
window.onload = () => {
    if (!sessionStorage.name) {
        location.href = '/login';
    } else {
        greeting.innerHTML = `Hello ${sessionStorage.name}`;
    }
}

const logout = document.querySelector('.logout');
logout.onclick = () => {
    sessionStorage.clear();
    location.reload();
}

// maps integration
// Initialize and add the map
// function initMap() {
//     // The location of Uluru
//     const uluru = { lat: -25.344, lng: 131.031 };
//     // The map, centered at Uluru
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 4,
//         center: uluru,
//     });
//     // The marker, positioned at Uluru
//     const marker = new google.maps.Marker({
//         position: uluru,
//         map: map,
//     });
// }

// window.initMap = initMap;

let dropdown = document.getElementById('locality-dropdown');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose State/Province';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = 'https://api.myjson.com/bins/7xq2x';

const request = new XMLHttpRequest();
request.open('GET', url, true);

window.onload = () => {
    const data = [{
        "name": "Alberta",
        "abbreviation": "AB"
    },
    {
        "name": "British Columbia",
        "abbreviation": "BC"
    },
    {
        "name": "Manitoba",
        "abbreviation": "MB"
    },
    {
        "name": "New Brunswick",
        "abbreviation": "NB"
    },
    {
        "name": "Newfoundland and Labrador",
        "abbreviation": "NL"
    },
    {
        "name": "Nova Scotia",
        "abbreviation": "NS"
    },
    {
        "name": "Northwest Territories",
        "abbreviation": "NT"
    },
    {
        "name": "Nunavut",
        "abbreviation": "NU"
    },
    {
        "name": "Ontario",
        "abbreviation": "ON"
    },
    {
        "name": "Prince Edward Island",
        "abbreviation": "PE"
    },
    {
        "name": "Quebec",
        "abbreviation": "QC"
    },
    {
        "name": "Saskatchewan",
        "abbreviation": "SK"
    },
    {
        "name": "Yukon",
        "abbreviation": "YT"
    }
    ]
    let option;
    for (let i = 0; i < data.length; i++) {
        option = document.createElement('option');
        option.text = data[i].name;
        option.value = data[i].abbreviation;
        dropdown.add(option);
    }
}

request.onerror = function () {
    console.error('An error occurred fetching the JSON from ' + url);
};

request.send();