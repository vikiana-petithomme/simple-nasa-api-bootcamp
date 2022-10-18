
document.querySelector('button').addEventListener('click', getPicture)

function getPicture(){

    let date =  document.querySelector('input').value

    console.log (date)
    
    fetch(`https://api.nasa.gov/planetary/apod?api_key=VxaVsweMBaTmzl3NCui1hsh8gNPXT78HNUFcBWrK&date=${date}`)
        .then (res=> res.json())
        .then (data => {
            console.log(data)
            document.querySelector('img').src = data.hdurl

            document.querySelector('h2').innerText = data.title
            
            document.querySelector('h3').innerText = data.explanation
        })
        .catch (err => {
            console.log(`error ${err}`)
        })
        
       

}