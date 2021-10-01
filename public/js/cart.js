var cart = JSON.parse(document.getElementById("cart_var").innerHTML);
var total_label = document.getElementById("total_ul");
var total_cost;
const cart_list = document.getElementById("cart_products");

function search_function(){
    window.location.href = "/product?product_id=" + document.getElementById("id_value").value;
}

function show_products(){
    total_cost = 0;
    for (let i = 0; i < cart.length; i++) {
        fetch_product(cart[i]);
    }
}

async function fetch_product(prod){
    var jsonData = null;
    var resp = await fetch('https://fakestoreapi.com/products/'+prod.prod_id);
    jsonData = await resp.json();
    if(jsonData != null){
        show_product(jsonData,prod.count);
    }
    total_label.innerHTML = total_cost;
}

function show_product(prod,count){
    const temp = document.createElement("li");
    var total = parseFloat(prod.price) * parseInt(count);
    var title_link = "/product?product_id="+prod.id;
    temp.innerHTML = "<li class='product_li'>"
    + "<img src="+prod.image+">"
    + "<div class='details'>"
    + "<a href='" + title_link + "'>"+prod.title+"</a>"
    + "<label id='price'>Product price: "+ prod.price + "$</label>"
    + "<label id='count'>Product count: "+ count + "</label>"
    + "<a href='/cart?remove_prod=" + prod.id + "'>Remove from Cart</a>"
    + "<label id='total_item'>Total: "+ total + "$</label>"
    + "</div>"
    + "</li>"
    total_cost += total;
    cart_list.appendChild(temp);

}



show_products();