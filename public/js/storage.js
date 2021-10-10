var product_list = document.getElementById("products");
var category_variable = document.getElementById("access").innerHTML;
var sub_category_ul = document.getElementById("sub_ul");
var sub_categories = JSON.parse(document.getElementById("access_sub").innerHTML);
var product_table = JSON.parse(document.getElementById("access_prods").innerHTML);
var nav_history_ul = document.getElementById("nav_history");
var manufacturer_ul = document.getElementById("manufacturer_list");
var filters_div = document.getElementById("filters_div");
var all_manufacturers = [];
var manufacturer_filter = "all";

function search_function(){
    window.location.href = "/search?t=" + document.getElementById("search_value").value;
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
    + "<label id='manufacturer'>Made by "+ prod.manufacturer + "</label>"
    + "</div>"
    + "</li>";
    product_list.appendChild(liel);
}


function showcase(){
    if(sub_categories!= null){
        filters_div.innerHTML = "";
        showcase_categories();
        create_history_li(category_variable);
    }
    else if(product_table != null){
        find_distinct_manufacturers();
        showcase_products();
        if(category_variable != "search"){
            create_history_li(product_table[0].category);
            create_history_li(category_variable);
        }
    }
}

function showcase_products(){
    product_list.innerHTML = "";
    if(product_table.length != 0){
        for (let i = 0; i < product_table.length; i++) {
            if(manufacturer_filter != "all"){
                if(product_table[i].manufacturer == manufacturer_filter){
                    create_product(product_table[i]);
                }
            }
            else{
                create_product(product_table[i]);
            }
        }
    }
    else{
        var temp = document.createElement("li");
        temp.innerHTML = "<p>There were no products found.</p>";
        product_list.appendChild(temp);
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

function create_radio_buttons(table){
    for (let i = 0; i < table.length; i++) {
        create_radio_button(table[i]);
      }
}

function create_radio_button(el){
    const liel = document.createElement("li");
    const temp = "change_manu_val('"+el+"')";
    liel.innerHTML = "<li class='mli'>"
    + "<input type='radio' name='same' id='"+el+"'onclick="+temp+">"
    + "<label for='"+el+"'> "+ el +"</label>"
    + "</li>";
    manufacturer_ul.appendChild(liel);
}

function change_manu_val(val){
    document.getElementById("mval").value = val;
    manufacturer_filter = val;
}

function find_distinct_manufacturers(){
    for (let i = 0; i < product_table.length; i++) {
        if(!(all_manufacturers.includes(product_table[i].manufacturer))){
            all_manufacturers.push(product_table[i].manufacturer);
        }
    }
    create_radio_buttons(all_manufacturers);
}

function filter_products(){
    switch(document.getElementById("sort_id").value){
        case "":
            console.log("no filter selected")
            break;
        case "p":
            product_table.sort(function(a, b) {
                return b.rating.count - a.rating.count;
            });
            break;
        case "pa":
            product_table.sort(function(a, b) {
                return a.price - b.price;
            });
            break;
        case "pd":
            product_table.sort(function(a, b) {
                return b.price - a.price;
            });
            break;
        case "ra":
            product_table.sort(function(a, b) {
                return a.rating.rate - b.rating.rate;
            });
            break;
        case "rd":
            product_table.sort(function(a, b) {
                return b.rating.rate - a.rating.rate;
            });
            break;
    }
    showcase_products();
}

showcase();