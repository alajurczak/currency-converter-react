const API = fetch("https://api.exchangerate.host/latest")
    .then((response) => {
        response.json();
    });

    console.log(API);