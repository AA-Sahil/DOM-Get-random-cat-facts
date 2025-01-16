// async function getQuote(){

//     // load img

//     axios.get("https://api.thecatapi.com/v1/images/search").then((res) => {
//         console.log(res.data);
//         // Extract the URL from the response (first object in the array)
//         let data = res.data[0].url;
//         let quoteData = document.querySelector('#img');
//         quoteData.innerHTML = `
//             <img src="${data}"  style="height: 250px;" alt="Cat image 😺" class="card-img-top"/>
//         `;
//     }).catch((error) => {
//         console.error("Error fetching the cat image:", error);
//     });


//     // load quote data

//     try {
//         const response = await fetch('https://catfact.ninja/fact');
//         const data = await response.json();
//         document.getElementById('quote').innerHTML = `
//                 <p class="py-3 fw-bold text-secondary">${data.fact}</p>
//         `;
//     } catch (error) {
//         console.error('Error fetching the cat fact:', error);
//         document.getElementById('cat-fact').innerText = "Could not fetch a cat fact. Try again!";
//     }



// }

// window.onload= getQuote


async function getQuote() {
    try {
        // Load cat image
        const imgResponse = await axios.get("https://api.thecatapi.com/v1/images/search");
        const imgData = imgResponse.data[0].url;
        let imgElement = document.querySelector('#img');
        imgElement.innerHTML = `
            <img src="${imgData}" style="height: 280px;" alt="📸 Cat image 😺" class="card-img-top img-fluid"/>
        `;

        // Load cat fact
        const factResponse = await fetch('https://catfact.ninja/fact');
        const factData = await factResponse.json();
        document.getElementById('quote').innerHTML = `
            <p class="py-3 fw-bold text-secondary">${factData.fact}</p>
        `;

    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('quote').innerText = "Could not fetch a cat fact. Try again!";
    }
}

window.onload = getQuote;
