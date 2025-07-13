//localStorage.removeItem("products");
let products = JSON.parse(localStorage.getItem("products")) || [];
let index=0;

window.onload = function () {

    renderTable();
    
};


function renderTable(){
    //let products = JSON.parse(localStorage.getItem("products")) || [];
    document.getElementById("products-table").innerHTML= "";
    products.forEach((item, index) => {
        const tr = CreateNewLi(item, index);
        document.getElementById("products-table").innerHTML += tr;
        index++;
    });


}



function addProduct(event) {
    event.preventDefault();
    const myData = getData();
    const newTR = CreateNewLi(myData, index);
    addToList(newTR);
   
    console.log(products);
    // form.reset();
    saveToLocalStorage(myData);  
    clearForm();



}

function saveToLocalStorage(myData){
    products.push(myData);
    localStorage.setItem("products", JSON.stringify(products));
}
function getData() {

    const name = document.getElementById("name-product").value
    const price = document.getElementById("price").value
    const category = document.getElementById("categories").value
    const pic = document.getElementById("pic").value

    return {
        name,
        price,
        category,
        pic,
    };
}

function CreateNewLi(myData, index) {
    const newTR= `<tr id="${index}">
                <td>${myData.name} </td>
                <td>${myData.price} </td>
                <td>${myData.category} </td>
                <td> <img src="${myData.pic}"></td>
                <td ><button onclick="deleteProduct(${index})">delete</button></td>
            </tr>`
            index++;
            return newTR;
}

function addToList(newTR) {

    document.getElementById("products-table").innerHTML += newTR;

}

function clearForm() {
    document.getElementById("myForm").reset();
}

function deleteProduct(index){

    // let animals = JSON.parse(localStorage.getItem("animals") || "[]");
    products.splice(index, 1); // Remove item at index
    localStorage.setItem("products", JSON.stringify(products)); // Save new list
    renderTable(); // Refresh table
}









