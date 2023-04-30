const card = document.querySelector(".card")

const currentUser = JSON.parse(localStorage.getItem("currentUser"))

for (let key in currentUser) {
    createCard(currentUser[key])
}

function createCard(info) {


    let p = document.createElement("p")
    p.innerText = info

    card.append(p)
}