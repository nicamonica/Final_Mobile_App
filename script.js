let searchButton = document.querySelector("#search")

// button that runs the function for API

searchButton.addEventListener("click", () => {
    console.log("button pressed")
    sendApiRequest()
})

// data from API

async function sendApiRequest() {
    let app_id = "a0794475"
    let api_key = "1359aae29ef76a84bcbe5c9944ae593d"
    let response = await fetch(`https://api.edamam.com/search?app_id=${app_id}&app_key=${api_key}&q=beans`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
}

//data received from API

function useApiData(data) {
    document.querySelector("#content").innerHTML = `
    <img src="${data.hits[9].recipe.image}" />
                 <ion-card-title>${data.hits[9].recipe.label}</ion-card-title>
                    <ion-card-content>${data.hits[9].recipe.ingredientLines}</ion-card-content> 
   `

}
