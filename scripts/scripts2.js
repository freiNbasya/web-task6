function fetchData(date) {
    document.getElementById("empty-p2").textContent = "";
    const apiRequest = new Promise((resolve, reject) => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=OttNmziJogEVnJ8nVrObuogpgJTHTtPjf5zwuF3T&date=${date}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch data from NASA API");
            }
            return response.json();
        })
        .then(data => {
            if (data.code === 400) {
                reject(new Error(data.msg));
            } else {
                resolve(data);
            }
        })
        .catch(error => {
            reject(error);
        });
    });
    apiRequest.then(data => {
            const image = document.getElementById("empty-image");
            image.src = data.url;
            document.getElementById("empty-p1").textContent = data.title;
            document.getElementById("empty-p2").textContent = data.explanation;
        })
        .catch(error => {
            console.log(error.msg);
        })
        .finally(() => {
            document.getElementById("empty-p3").textContent = "Request completed";
        });
}