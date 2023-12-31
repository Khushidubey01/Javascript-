<html>
<head>
<script type="text/javascript">
function capital()
{
var a=document.getElementById("state").value;

var word;

switch(a)
{
case "Uttar Pradesh":{ word="Lucknow"; break; }
case "Bihar" :{ word="Patna";  break; }
case "Chhattisgarh" : {word="Raipur";  break; }
case "Andhra Pradesh":{ word="Amaravti";  break; }
case "Karnataka":{word="Bengaluru";  break;}
case "Goa":{word="Panaji";  break;}
case "Punjab":{word="Chandigarh";  break;}
case "West Bengal":{word="Kolkata";  break;}
case "Mizoram":{word="Aizawl";  break;}
case "Haryana":{word="Chandigarh";  break;}
case "Himachal Pradesh":{word="Shimla";  break;}
case "Jharkhand":{word="Ranchi";  break;}
case "Arunachal Pradesh":{word="Itanagar";break;}
case "Gujarat":{word="Gandhinagar";break;}
case "Assam":{word="Dispur";break;}
case "Manipur":{word="Imphal";break;}
case "Kerala":{word="Thiruvananthpuram";break;}
case "Tripura":{word="Agartala";break;}
case "Rajasthan":{word="Jaipur";break;}
case "Odisha":{word="Bhubaneswar";break;}
case "Nagaland":{word="Kohima";break;}
case "Madhya Pradesh":{word="Bhopal";break;}
case "Tamil Nadu":{word="Chennai";break;}
case "Sikkim":{word="Gangtok";break;}
case "Meghalaya":{word="Shillong";break;}
case "Telangana":{word="Hyderabad";break;}
case "Uttarakhand":{word="Dehradun";break;}
case "Maharashtra":{word="Mumbai";break;}
}  
alert("Your capital is:"+word);}
</script>
</head>
<body>
Select your state name:
<br><br>
 <select id="state">
 <option>Uttar Pradesh</option>
 <option>Bihar</option>
<option> Chhattisgarh</option>
 <option>Karnataka</option>
 <option> Maharashtra</option>
 <option> Goa</option>
 <option>Punjab</option>
<option> West Bengal</option>
<option> Mizoram</option>
 <option>Haryana</option>
 <option>Himachal Pradesh</option>
<option> Jharkhand</option>
<option> Arunachal Pradesh</option>
<option> Gujarat</option>
 <option>Assam</option>
<option> Manipur</option>
 <option>Kerala</option>
 <option>Tripura</option>
 <option>Rajasthan</option> 
<option> Odisha</option>
<option> Nagaland</option>
 <option>Madhya Pradesh</option>
 <option>Tamil Nadu</option>
 <option>Andhra Pradesh</option>
<option> Sikkim</option> 
 <option>Meghalaya</option> 
 <option>Telangana</option> 
 <option>Uttarakhand</option> 
 <option>Maharashtra</option>
 </select>
<br><br>
<center><input type="button" onclick="capital()" value="Click for capital name"></center>
</body>
</html>