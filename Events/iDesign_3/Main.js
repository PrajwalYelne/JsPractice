<!DOCTYPE html>
<html>
<body>
 <center>
   <h3>Oninput Event</h3>
 <textarea id="myContent" oninput="displayContent()"></textarea>

<div id="result"></div>
</center>
</body>
 <script>
 function displayContent(){
text = document.getElementById("myContent").value
if(text.length===0){
document.getElementById("result").innerHTML = "";
return
}
document.getElementById("result").innerHTML = "Typed text is : " + text;
}
 </script>
  </html>
