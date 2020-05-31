function clicked() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    // xhttp.open("GET", "ajax_info.txt", true);
    xhttp.open("GET", "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata", true);
    xhttp.send();
}