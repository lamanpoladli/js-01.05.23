const API_URL = 'https://northwind.vercel.app/api/categories';
const search = document.querySelector("#search");
let editModal = document.querySelector("#edit-category-modal");
let EditCloseModal = document.querySelector(".close-modal-edit");
let editBtn = document.querySelector(".edit-btn");
let editNameInput = document.querySelector("#edit-name");
let editDescInput = document.querySelector("#edit-desc");
let loading = document.querySelector(".loading");


loading.style.display = "none";
(async function getData() {
    const row = document.querySelector(".row");
    loading.style.display = "flex";
    try{
        const res = await fetch(API_URL)
        const data = await res.json()

        data.forEach(element => {
            loading.style.display = "none";
            let newCard = createCard(element);
            row.append(newCard);
        });
        search.addEventListener("keyup",(e)=>{
                row.innerHTML = "";
                let filteredData = data.filter((user)=>user.name.trim().toLowerCase().includes(e.target.value.trim().toLowerCase()))
                filteredData.forEach((user)=>{
                    let newCard = createCard(user);
                    row.append(newCard);


                
                })
            })
    }catch(err){
        console.log(err)
    }
})();

function createCard(user) {
    let col = document.createElement("div");
    col.classList.add("col-3");
    col.classList.add("mb-3");

    let card = document.createElement("div");
    card.classList.add("card");

    let image = document.createElement("img");
    image.setAttribute("src", "https://www.the-sun.com/wp-content/uploads/sites/6/2021/05/NINTCHDBPICT000490462157.jpg");

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let title = document.createElement("a");
    title.setAttribute("href","info.html");
    title.classList.add("card-title");
    title.innerText = user.name;
    title.addEventListener("click", function () {
        localStorage.setItem("currentUser", JSON.stringify(user))
    })



    let userName = document.createElement("p");
    userName.classList.add("card-list");
    userName.innerText = user.description;
    
    let editbtn = document.createElement("button");
    editbtn.classList.add("button-e-d");
    editbtn.innerHTML = `<a href="edit.html">edit</a>`;

    let deletebtn = document.createElement("button");
    deletebtn.classList.add("button-e-d");
    deletebtn.innerText = "Delete";
    deletebtn.setAttribute("data-id", `${user.id}`);
    
    const deleteCategoryByID = async (id)=>{
        await fetch(`${API_URL}/${id}`,{
            method: "DELETE",
        })
    };
    deletebtn.addEventListener("click",(e)=>{
        if(!confirm("Are you sure you want to delete?")) return;
        let id = e.target.getAttribute("data-id");
                deleteCategoryByID(id);
                e.target.parentElement.parentElement.parentElement.remove();
    })
    


    async function editCategoryByID(id,category){
        let global_data;
        await fetch(`${baseURL}/${id}`,{
            method:'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(category)
        })
    }


    cardBody.append(title,userName,editbtn,deletebtn);
    card.append(image, cardBody);
    col.append(card);

    return col;


}