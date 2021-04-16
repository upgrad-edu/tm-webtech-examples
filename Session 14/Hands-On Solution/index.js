var xhr = new XMLHttpRequest();

function searchbook() {
    var booksearch = document.getElementById('booksearch').value;
    var getString = 'https://www.googleapis.com/books/v1/volumes?q=' + booksearch;
    xhr.open('GET', getString);
    xhr.send();   
    xhr.onreadystatechange = function (data){
       if(xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.response);
           for (i=0; i<data.items.length; i++){
                document.getElementById('displaysearchedresults').innerHTML += "<p>" + data.items[i].volumeInfo.title + "<p>"
           }    
       }
   }
}
