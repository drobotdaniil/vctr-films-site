const test = document.querySelector(".test");
fetch('./data.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        // Work with JSON data here
        let output = '<div class="block">';
        for (var i = 0; i < data.length; i++) {
            output += "<div class = 'item' >";
            output += "<p>" + data[i].title + "</p>";
            output += "</div>";
        }
        output += "</div>";
        test.innerHTML = output;
    })
    .catch(err => {
        // Do something for an error here
    })