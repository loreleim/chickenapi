const fetchPromise = fetch("https://loreleim.github.io/chickenapi/data/flat.json");
//console.log(fetchPromise);

fetchPromise
.then((response) => {
    //console.log(response);
    //console.log(`Response OK? ${response.ok}`);
    //console.log(`Response status: ${response.status}`);

    if (!response.ok) {
        throw Error("Bad API request.");
    }

    return response.json();
})
.then((json) => {
    //console.log(json);

    const main = document.querySelector("main");
    main.innerHTML += "<h1>Chickens Available</h1>"
    json.chickens.map((json) => (
        main.innerHTML += `
        <div>
        </div>
        <h1>${json.type}</h1>
        `
    ))
})
.catch((error) => console.log (error));

//console.log("Fetch initiated!");
