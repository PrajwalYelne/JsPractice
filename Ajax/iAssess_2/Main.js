<html>
<head>
<title>Ajax - XML Retrieval and Json Conversion</title>
<link rel="stylesheet" href="style.css">
<script>
   function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "booklist.xml", true);
  xhttp.send();
}

function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Book Name</th><th>Author Name</th><th>Price</th></tr>";
  var x = xmlDoc.getElementsByTagName("book");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("bookname")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("authorname")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
    "</td></tr>";

  }
  document.getElementById("demo").innerHTML = table;
}
loadDoc();

</script>
