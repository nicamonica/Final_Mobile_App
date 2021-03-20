let searchButton = document.querySelector("#search")

// button that runs the function for API

searchButton.addEventListener("click", ()=>{
    console.log("button pressed")
    sentApiRequest()
})

// data from API

async function sendApiRequest(){
    let app_id = "a0794475"
    let api_key = "1359aae29ef76a84bcbe5c9944ae593d"
    let response = await fetch(``);
    console.log(response)
}

//data received from API

function useApiData(data){

}
