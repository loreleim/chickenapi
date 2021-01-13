const fetchPromise = fetch("https://loreleim.github.io/publicapi/data/flat.json");
console.log(fetchPromise);

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
    console.log(json.chickens[0].type);
    const name = json.chickens[0].type;

    //We would do this differently in React
    const main = document.querySelector("main");
    main.innerHTML += `
    <h1>${name}</h1>
    `;
})
.catch((error) => console.log (error));

console.log("Fetch initiated!");
