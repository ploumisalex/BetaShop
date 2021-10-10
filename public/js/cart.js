var cart = JSON.parse(document.getElementById("cart_var").innerHTML);
var total_label = document.getElementById("total_ul");
var total_cost = 0;
const cart_list = document.getElementById("cart_products");

function search_function(){
    window.location.href = "/search?t=" + document.getElementById("search_value").value;
}
function show_products(){
    for (let i = 0; i < cart.length; i++) {
        show_product(cart[i].product[0],cart[i].count);
    }
    total_label.innerHTML = total_cost;
}

function show_product(prod,count){
    const temp = document.createElement("li");
    var total = parseFloat(prod.price) * parseInt(count);
    var title_link = "/product?pid="+prod._id;
    temp.innerHTML = "<li class='product_li'>"
    + "<img src="+prod.img+">"
    + "<div class='details'>"
    + "<a id='title' href='" + title_link + "'>"+prod.title+"</a>"
    + "<label id='price'>Product price: "+ prod.price + "$</label>"
    + "<label id='count'>Product count: "+ count + "</label>"
    + "<a id='remove_a' href='/cart?rp=" + prod._id + "'><img id='ximg' src='imgs/x.png'' alt='Item'> Remove from Cart</a>"
    + "<label id='total_item'>Total: "+ total + "$</label>"
    + "</div>"
    + "</li>";
    total_cost += total;
    cart_list.appendChild(temp);

}



show_products();