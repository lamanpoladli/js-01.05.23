let inputName = document.querySelector("#fname")
let inputTitle = document.querySelector("#tname")
let submit = document.querySelector("#submit")
const API_URL = 'https://northwind.vercel.app/api/categories';
//post 
const postSupplier = async (supplier) => {
    await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(supplier)
    })
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    let errorMsg=document.querySelector(".error");
    if(inputName.value =="" || inputTitle.value =="" ){
        
        errorMsg.classList.replace("d-none","d-block");
    }else{
        const supplier = {
            name: inputName.value,
            description: inputTitle.value,
        }

        errorMsg.classList.replace("d-block","d-none");
        Swal.fire({

            title: 'Əlavə olundu!',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(images.jpg)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("giphy.gif")
              top  center
              no-repeat
              
            `
           
          })
          
        inputName.value = "";
        inputTitle.value = "";
        
    
    
        postSupplier(supplier);
        
    }
    


})
