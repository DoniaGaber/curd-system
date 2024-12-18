var productName=document.getElementById('productName')
var productCategory=document.getElementById('productCategory')
var productPrice=document.getElementById('productPrice')
var productDescription=document.getElementById('productDescription')
var productsArr=JSON.parse(localStorage.getItem('ourProduct'))
var index;
if(JSON.parse(localStorage.getItem('ourProducts'))==null){
    productsArr= []
}
else{
    productsArr=JSON.parse(localStorage.getItem('ourProducts'))
}
function addProduct(){
    var btn =document.getElementById('btn').innerHTML
    if(btn =document.getElementById('btn').innerHTML=='Update'){
        productsArr[index].name=productName.value
        productsArr[index].category=productCategory.value
        productsArr[index].price=productPrice.value
        productsArr[index].desc=productDescription.value
        btn =document.getElementById('btn').innerHTML="Add Product"

    }
    else{
    var products={
        "name":productName.value,
        "category":productCategory.value,
        "price":productPrice.value,
        "desc":productDescription.value,
    }
    productsArr.push(products)
    
}
    localStorage.setItem('ourProducts',JSON.stringify(productsArr))
    clear()
    displayProduct()
}
function displayProduct(anyArr){
    var productaTable =``
    for(let i=0;i<productsArr.length;i++){
        productaTable+=`
        <tr>
        <td>${i+1}</td>
        <td>${productsArr[i].name}</td>
        <td>${productsArr[i].category}</td>
        <td>${productsArr[i].price}</td>
        <td>${productsArr[i].desc}</td>
        <td><button onclick="deleteproduct(${i})" class="btn btn-danger">Delete</button></td>
        <td><button onclick="update(${i})" class="btn btn-success">Update</button></td>
        </tr>
        `
    }
    document.getElementById('product').innerHTML=productaTable
}
displayProduct(productsArr)

function deleteproduct(index){
    productsArr.splice(index,1)
    localStorage.setItem('ourProducts',JSON.stringify(productsArr))
    displayProduct(productsArr)
}
function Search(){
    var searchProducts = document.getElementById('search').value
    var newProductArr=[]
    for(let i=0;i<productsArr.length;i++){
        if(productsArr[i].name.toUpperCase().includes(searchProducts.toUpperCase())){
            newProductArr.push(productsArr[i])
        }
    }
    displayProduct(newProductArr)
}
function clear(){
    productName.value=''
    productCategory.value=''
    productPrice.value=''
    productDescription.value=''
}
function update(i){
    productName.value=productsArr[i].name
    productCategory.value=productsArr[i].category
    productPrice.value=productsArr[i].price
    productDescription.value=productsArr[i].desc
    document.getElementById('btn')
    btn =document.getElementById('btn').innerHTML="Update"

}