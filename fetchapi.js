const url = "https://catfact.ninja/fact";
const h1 = document.querySelector('h1');
const button = document.querySelector('button');

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

// Call fetchData() initially
fetchData();

button.addEventListener('click', () => {
    // Call fetchData() when the button is clicked
    fetchData();
});

document.addEventListener('keydown', async (e) => {
    // Check for the spacebar using e.code
    if (e.code === "Space") {
        // Call fetchData() when the spacebar is pressed
        await fetchData();
    }
});
