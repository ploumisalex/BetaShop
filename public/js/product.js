var star_1 = document.getElementById("st1");
var star_2 = document.getElementById("st2");
var star_3 = document.getElementById("st3");
var star_4 = document.getElementById("st4");
var star_5 = document.getElementById("st5");
var reviews_p = JSON.parse(document.getElementById("reviews_p").innerHTML);
var reviews_ul = document.getElementById("all_reviews");

var product_ul = document.getElementById("product_info");
var product_id = document.getElementById("access").innerHTML;
var related_ul = document.getElementById("related_ul");
const related_num = 3; //number of shown related products
var product_category = null;

function search_function(){
    var temp = document.getElementById("id_value").value;
    if (isNaN(temp)){
        console.log("bro");
    }else{
        window.location.href = "/product?product_id=" +temp;
    }
}

async function fetch_product(id){
    var jsonData = null;
    if( id.length != 0){
        var resp = await fetch('https://fakestoreapi.com/products/'+id);
        jsonData = await resp.json();
    }
    if(jsonData != null){
        console.log(jsonData);
        create_and_show_product(jsonData);
        product_category = jsonData.category;
        show_related_products(product_category);
    }
    else{
        show_error(id);
    }
}

function create_and_show_product(prod){
    const temp = document.createElement("li");
    temp.innerHTML = "<li class='product_li'>"
    + "<div id='info'>"
    +"<div class='item_image'>"
    + "<img src="+prod.image+">"
    + "</div>"
    + "<div class='details'>"
    + "<label id='title'>"+prod.title+"</label>"
    + "<label id='category'>"+ prod.category + "</label>"
    + "<label id='price'>"+ prod.price + " $</label>"
    + "<label id='rating'>"+ prod.rating.rate + " <img src='imgs/star.png'' alt='Item'> out of "+prod.rating.count+" reviews</label>"
    + "<form method='POST' id='add_to_cart'>"
    + "<input type='number' name='ammount' min='1' max='10' id='typenum' value='1' required>" 
    + "<button id='add_to_cart_button' type='submit'>Add to Cart</button>"
    + "</form>"
    + "</div>"
    + "</div>"
    + "<div id='description'>"
    + "<h4>Description:</h4>"
    + "<p>" +prod.description+ "</p>"
    + "</div>"
    + "</li>"
    product_ul.appendChild(temp);
}

function show_error(id){
    const temp = document.createElement("li");
    temp.innerHTML = "<li class='error'>"
    + "<p>No product was found with id : "+ id+"</p>"
    + "</li>"
    product_ul.appendChild(temp);

}

async function show_related_products(category){
    if( category!= null){
        var resp = await fetch('https://fakestoreapi.com/products/category/'+category);
        const jsonData = await resp.json();
        select_random_products(jsonData);
    }
}

function select_random_products(data){
    var related_products_temp = [];
    var added_related = 0;
    while (added_related < related_num) {
        var random = Math.floor(Math.random() * data.length);
        if(data[random].id != product_id && !related_products_temp.includes(data[random].id)){
            add_related_product(data[random]);
            related_products_temp.push(data[random].id);
            added_related ++;
        }
    }
}



function add_related_product(prod){
    const temp = document.createElement("li");
    var title_link = "/product?product_id="+prod.id;
    temp.innerHTML = "<li class='related_li'>"
    + "<img src="+prod.image+">"
    + "<a href='" + title_link + "'>"+prod.title+"</a>"
    + "<label>"+ prod.price + " $</label>"
    + "</li>"
    related_ul.appendChild(temp);

}


function fill(num){
    document.getElementById("radio_value").value = num;
    switch(num) {
        case 1:
          star_1.src = "./imgs/star.png";
          star_2.src = "./imgs/star_1.png";
          star_3.src = "./imgs/star_1.png";
          star_4.src = "./imgs/star_1.png";
          star_5.src = "./imgs/star_1.png";
        break;
        case 2:
          star_1.src = "./imgs/star.png";
          star_2.src = "./imgs/star.png";
          star_3.src = "./imgs/star_1.png";
          star_4.src = "./imgs/star_1.png";
          star_5.src = "./imgs/star_1.png";
        break;
        case 3:
          star_1.src = "./imgs/star.png";
          star_2.src = "./imgs/star.png";
          star_3.src = "./imgs/star.png";
          star_4.src = "./imgs/star_1.png";
          star_5.src = "./imgs/star_1.png";
        break;
        case 4:
          star_1.src = "./imgs/star.png";
          star_2.src = "./imgs/star.png";
          star_3.src = "./imgs/star.png";
          star_4.src = "./imgs/star.png";
          star_5.src = "./imgs/star_1.png";
        break;
        case 5:
          star_1.src = "./imgs/star.png";
          star_2.src = "./imgs/star.png";
          star_3.src = "./imgs/star.png";
          star_4.src = "./imgs/star.png";
          star_5.src = "./imgs/star.png";
        break;
      }
}

function show_reviews(){
    if(reviews_p.length == 0){
        var temp = document.createElement("li");
        temp.innerHTML = "<li>There are no reviews of this product. Review this item first!</li>"
        reviews_ul.appendChild(temp);
    }else{
        for (let i = 0; i < reviews_p.length; i++) {
            show_single_review(reviews_p[i])
          }
    }
}

function show_single_review(data){
    const temp = document.createElement("li");
    temp.innerHTML = "<li class='review_li'>"
    + "<label>Customer "+ data.customer_id +" gave this product "+ data.stars +" out of 5 stars!</label>"
    + "<textarea rows='3' readonly>"+ data.review+"</textarea>"
    + "</li>"
    reviews_ul.appendChild(temp);

}

fetch_product(product_id);
document.getElementById("radio_value").value = 1;
document.getElementById("product_id_input").value = product_id;


