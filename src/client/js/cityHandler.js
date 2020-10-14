function cityHandler(event) {
    event.preventDefault();
    
   let options = {};
    console.log(options);
    const key = 'jaroot1212'
    const heroku_cors = "https://cors-anywhere.herokuapp.com/";

    let searchText = document.getElementById("city").value

    let date = document.querySelector("#date");
    console.log(date)

    options["name"] = searchText
    document.getElementById("city").value = "";
    options["username"] = key
    const geoUrl = 'http://api.geonames.org/searchJSON?';
    let geoData = heroku_cors + geoUrl + 'name=' + options["name"] + '&username=' + options["username"];

return Client.getter(geoData).then(function(data) {
    // console.log(data)
    // console.table(data.geonames)
    // let geonames = data.geonames[0];
    let countryName = data.geonames[0].countryName;
    // let countryName = 'red roses'
        // console.log(countryName)
        var API_KEY = '18297839-a1621bfe0657d480a4d918528';
        var URL = heroku_cors + "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(countryName);
        // console.log(URL)
        Client.getter(URL).then(function(d) {
            // let d = JSON.parse(data)
            console.log(d.hits)
            let entries = Client.cityPixabayEntry(d.hits);
            // console.log(entries)
            Client.displayEntries(entries, "cityImages");
        })
    })


}

export { cityHandler }