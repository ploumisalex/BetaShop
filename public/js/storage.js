var product_list = document.getElementById("products");
var category_variable = document.getElementById("access").innerHTML;
var sub_category_ul = document.getElementById("sub_ul");
var sub_categories = JSON.parse(document.getElementById("access_sub").innerHTML);
var product_table = JSON.parse(document.getElementById("access_prods").innerHTML);
var nav_history_ul = document.getElementById("nav_history");

function search_function(){
    window.location.href = "/product?pid=" + document.getElementById("id_value").value;
}

function create_product(prod){
    const liel = document.createElement("li");
    var title_link = "/product?pid="+prod._id;
    liel.innerHTML = "<li class='single_item'>"
    +"<div class='item_image'>"
    + "<img src="+prod.img+">"
    + "</div>"
    + "<div class='info'>"
    + "<a href='" + title_link + "'>"+prod.title+"</a>"
    + "<label id='rating'>"+ prod.rating.rate + " <img id='starimg' src='imgs/star.png'' alt='Item'> out of "+prod.rating.count+" reviews</label>"
    + "<label id='price'>"+ prod.price + " $</label>"
    + "<label id='manufacturer'>Made by"+ prod.manufacturer + "</label>"
    + "</div>"
    + "</li>";
    product_list.appendChild(liel);
}


function showcase(){
    if(sub_categories!= null){
        showcase_categories();
        create_history_li(category_variable);
    }
    else if(product_table != null){
        showcase_products();
        create_history_li(product_table[0].category);
        create_history_li(category_variable);
    }
}

function showcase_products(){
    product_list.innerHTML = "";
    for (let i = 0; i < product_table.length; i++) {
        create_product(product_table[i]);
    }
}

function showcase_categories(){
    sub_category_ul.innerHTML = "";
    for (let i = 0; i < sub_categories.length; i++) {
        create_cat(sub_categories[i]);
    }
}

function create_cat(data){
    const liel = document.createElement("li");
    var href_link = "/storage?category="+data;
    liel.innerHTML = "<li class='sub_cat_li'>"
    + "<a href='" + href_link + "'>"+data+"</a>"
    + "</li>";
    sub_category_ul.appendChild(liel);
}

function create_history_li(data){
    const lielprior = document.createElement("li");
    lielprior.innerHTML = "<li class='history_li'>></li>";
    const liel = document.createElement("li");
    var href_link = "/storage?category="+data;
    liel.innerHTML = "<li class='history_li'>"
    + "<a href='" + href_link + "'>"+data+"</a>"
    + "</li>";
    nav_history_ul.appendChild(lielprior);
    nav_history_ul.appendChild(liel);
}

showcase();