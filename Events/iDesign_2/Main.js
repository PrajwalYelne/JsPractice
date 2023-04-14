<html>
    <head>
        <script type="text/javascript">
             function validate()
             {
                phone = document.getElementById("phoneNumber").value
                card = document.getElementById("cardNumber").value
                phonewarning = document.getElementById("phoneNumber_Warning")
                cardwarning = document.getElementById("cardNumber_Warning")

                if(phone.length!==10){
                    phonewarning.innerHTML = "Phone Number must be 10 digits"
                    phonewarning.style.display="inline";
                    document.getElementById("success").style.display = "none"

                }
                if(card.length!==16){
                    cardwarning.innerHTML = "Card Number must be 16 digits"
                    cardwarning.style.display="inline";
                    document.getElementById("success").style.display = "none"

                }

                if(phone.length===10 && card.length===16){
                    phonewarning.innerHTML = ""
                    phonewarning.style.display="none"
                    cardwarning.innerHTML = ""
                    cardwarning.style.display="none";
                    document.getElementById("success").style.display = "block"
                }
             }
             function checkPhoneNumber()
             {
                value = document.getElementById("phoneNumber").value
                warning = document.getElementById("phoneNumber_Warning")
                

                for(var i=0;i<value.length;i++){
                    if(value.charCodeAt(i)<48 || value.charCodeAt(i)>57)
                    {
                        warning.innerHTML = "Phone number must contains only digits"
                        warning.style.display="inline";
                        return;
                    }
                }
                warning.innerHTML = ""
                warning.style.display="none";
                
             }
             function checkCardNumber()
             {
                  
                value = document.getElementById("cardNumber").value
                warning = document.getElementById("cardNumber_Warning")

                for(var i=0;i<value.length;i++){
                    if(value.charCodeAt(i)<48 || value.charCodeAt(i)>57)
                    {
                        warning.innerHTML = "Card number must contains only digits"
                        warning.style.display="inline";
                        return;
                    }
                }
                warning.innerHTML = ""
                warning.style.display="none";
               
             }
    	 </script>
	</head>
	<body>
        <h3>Phone Number & Card Validation</h3>
        Enter your Phone Number:<input type="text" onkeydown="checkPhoneNumber()" id="phoneNumber" oninput="checkPhoneNumber()">
        <div id="phoneNumber_Warning"></div></br>
        
        Enter your Card Number:<input type="text" onkeydown="checkCardNumber()" id="cardNumber" oninput="checkCardNumber()">
        <div id="cardNumber_Warning"></div></br>
        <button type="button" id="validate" onclick="validate()">Validate</button>
       <div id="success" style="display:none">Details stored in database</div>
	</body>
</html>
