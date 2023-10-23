const url = "https://catfact.ninja/fact";
const h1 = document.querySelector('h1');
const button = document.querySelector('button');

// Promises
// const fetchData = () => {
//     fetch(url)
//         .then((response) => response.json())
//         .then((data) => (h1.innerText = data.fact))
//         .catch((e) => console.error(e))
//         .finally(() => console.log("all done"));
// };


// Async Await
const fetchData = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        h1.innerText = data.fact;
        console.log("Data fetched successfully");
    } catch (error) {
        console.error(error);
    } finally {
        console.log("all done");
    }
};

fetchData();


fetchData();

button.addEventListener('click', () => {
    let newFact = true;
    if (newFact) {
        location.reload();
    }
});

document.addEventListener('keydown', (e) => {
    let newFact = false;
    if (!newFact) {
        // Check for the spacebar using e.code
        if (e.code === "Space") {
            location.reload();
        }
    }
});
 




