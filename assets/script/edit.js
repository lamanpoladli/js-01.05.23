let inputName = document.querySelector("#fname")
let inputTitle = document.querySelector("#tname")
let submit = document.querySelector("#submit")
const API_URL = 'https://northwind.vercel.app/api/categories';
let id;
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

getByCategories().then(data => {
    data.forEach(element => {
        id=element.id;
    });
})

editBtn.addEventListener("click",(e) =>{
    e.preventDefault();
    const products = {
        name:inputName.value,
        description: inputTitle.value,
    };
    console.log(id,products);
    PutCategories(id,products)
})