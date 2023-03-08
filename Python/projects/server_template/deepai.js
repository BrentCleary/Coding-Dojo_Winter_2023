
// Promise is a Class
// Returns a promise

// var BASE_URL = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/"

// var results = document.getElementById('results')



const fs = require('fs');

const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML

deepai.setApiKey('f9c00b45-21c1-49e5-ad2d-1a5b5c66fe58');

(async function() {
    var resp = await deepai.callStandardApi("cute-creature-generator", {
        text: fs.createReadStream("/path/to/your/file.txt"),
    });
    console.log(resp);
})()



// .then and .catch are promise resolutions

console.log("Check this");