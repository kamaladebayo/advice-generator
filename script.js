const adviceToggler = document.getElementById("adviceToggler");
const adviceId = document.getElementById("adviceId");
const advice = document.getElementById("advice");


adviceToggler.addEventListener("click", (e) => {
    fetch('	https://api.adviceslip.com/advice')
    .then((response) =>{
        return response.json()
    })
    .then((data) =>{
        adviceId.textContent = `${data.slip.id}`
        advice.textContent = `"${data.slip.advice}"`
    })
})