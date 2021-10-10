var star_1 = document.getElementById("st1");
var star_2 = document.getElementById("st2");
var star_3 = document.getElementById("st3");
var star_4 = document.getElementById("st4");
var star_5 = document.getElementById("st5");
var reviews_p = JSON.parse(document.getElementById("reviews_p").innerHTML);
var reviews_ul = document.getElementById("all_reviews");
var nav_history_ul = document.getElementById("nav_history");

var product_ul = document.getElementById("product_info");
var product = JSON.parse(document.getElementById("access").innerHTML);
var relatedp = JSON.parse(document.getElementById("relatedp").innerHTML);
var related_ul = document.getElementById("related_ul");
const related_num = 3; //number of shown related products
var product_category = null;

function search_function(){
    window.location.href = "/search?t=" + document.getElementById("search_value").value;
}

function create_and_show_product(prod){
    const temp = document.createElement("li");
    temp.innerHTML = "<li class='product_li'>"
    + "<div id='info'>"
    +"<div class='item_image'>"
    + "<img src="+prod.img+">"
    + "</div>"
    + "<div class='details'>"
    + "<label id='title'>"+prod.title+"</label>"
    + "<label id='rating'>"+ prod.rating.rate + " <img src='imgs/star.png'' alt='Item'> out of "+prod.rating.count+" reviews</label>"
    + "<label id='price'>"+ prod.price + " $</label>"
    + "<form method='POST' id='add_to_cart'>"
    + "<button id='add_to_cart_button' type='submit'>Add to Cart</button>"
    + "</form>"
    + "<label id='stock'>In stock: "+prod.stock+"</label>"
    + "<div id='description'>"
    + "<label id='manufacturer'>Made by: "+prod.manufacturer+"</label>"
    + "<p>" +prod.description+ "</p>"
    + "</div>"
    + "</div>"
    + "</div>"
    + "</li>"
    product_ul.appendChild(temp);
}

function show_error(){
    const temp = document.createElement("li");
    temp.innerHTML = "<li class='error'>"
    + "<p>We were unable to find this product.</p>"
    + "</li>"
    product_ul.appendChild(temp);

}

async function show_related_products(){
    for (let i = 0; i < relatedp.length; i++) {
        add_related_product(relatedp[i]);
      }
}


function add_related_product(prod){
    const temp = document.createElement("li");
    var title_link = "/product?pid="+prod._id;
    temp.innerHTML = "<li class='related_li'>"
    + "<div id='imgdiv'>"
    + "<img src="+prod.img+">"
    +"</div>"
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
    reviews_ul.innerHTML = "";
    if(reviews_p.length == 0){
        var temp = document.createElement("li");
        temp.innerHTML = "<li>There are no reviews of this product. Be the first to review this item!</li>"
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

function showcase_product(){
    if(product != null){
        document.getElementById("product_id_input").value = product._id;
        document.getElementById("radio_value").value = 1;
        create_history_li(product.category,false);
        create_history_li(product.sub_category,false);
        create_history_li(product._id,true);
        create_and_show_product(product);
        show_related_products();
    }
    else{
        show_error();
        document.getElementById("reviews").innerHTML = "";

    }
}

function create_history_li(data,bl){
    const lielprior = document.createElement("li");
    lielprior.innerHTML = "<li class='history_li'>></li>";
    const liel = document.createElement("li");
    if(!bl){
        var href_link = "/storage?category="+data;
    }
    else{
        var href_link = "/product?pid="+data;
    }
    liel.innerHTML = "<li class='history_li'>"
    + "<a href='" + href_link + "'>"+data+"</a>"
    + "</li>";
    nav_history_ul.appendChild(lielprior);
    nav_history_ul.appendChild(liel);
}


showcase_product();



