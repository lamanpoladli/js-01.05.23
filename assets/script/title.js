let inputName = document.querySelector("#fname")
let inputTitle = document.querySelector("#tname")
const API_URL = 'https://northwind.vercel.app/api/categories';
//post 
const postSupplier = async (supplier) => {
    await fetch(API_URL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(supplier)
    })
}


        const supplier = {
            name: inputName.value,
            description: inputTitle.value,
        }

        
    
    
        postSupplier(supplier);
        
    
    




