var product_list = document.getElementById("products");
var category_variable = document.getElementById("access").innerHTML;

function search_function(){
    window.location.href = "/product?product_id=" + document.getElementById("id_value").value;
}

async function fetch_category(cat){
    if( cat!= null){
        var resp = await fetch('https://fakestoreapi.com/products/category/'+cat);
    }
    const jsonData = await resp.json();
    show_products(jsonData);
}


function show_products(data){
    product_list.innerHTML = "";
    if (data!= null){
        for (let i = 0; i < data.length; i++) {
            create_product(data[i]);
          }
    }
}

function create_product(prod){
    const liel = document.createElement("li");
    var title_link = "/product?product_id="+prod.id;
    liel.innerHTML = "<li class='single_item'>"
    +"<div class='item_image'>"
    + "<img src="+prod.image+">"
    + "</div>"
    + "<div class='info'>"
    + "<a href='" + title_link + "'>"+prod.title+"</a>"
    + "<label id='price'>"+ prod.price + " $</label>"
    + "<label id='rating'>"+ prod.rating.rate + " <img src='imgs/star.png'' alt='Item'> out of "+prod.rating.count+" reviews</label>"
    + "</div>"
    + "</li>";
    product_list.appendChild(liel);
}

fetch_category(category_variable);