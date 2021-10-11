var categories_table = JSON.parse(document.getElementById("access_categories").innerHTML);
var categories_ul = document.getElementById("categories_ul");

function search_function(){
    window.location.href = "/search?t=" + document.getElementById("search_value").value;
}


function showcase_categories(){
    categories_ul.innerHTML = "";
    for (let i = 0; i < categories_table.length; i++) {
        create_cat(categories_table[i]);
    }
}

function create_cat(data){
    const liel = document.createElement("li");
    var href_link = "/storage?category="+data;
    liel.innerHTML = "<li class='cat_li'>"
    + "<a href='" + href_link + "'><img src='./imgs/"+data+".jpg'>"+data+"</a>"
    + "</li>";
    categories_ul.appendChild(liel);
}

showcase_categories();