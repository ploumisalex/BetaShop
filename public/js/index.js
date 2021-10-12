
function search_function(){
    window.location.href = "/search?t=" + document.getElementById("search_value").value;
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }