<html>
<head>
<script type="text/javascript">
function month()
{
var a=document.getElementById("num").value;

var word;

switch(a)
{
case "1" :{ word="January";  break; }
case "2" :{ word="February";  break; }
case "3" : {word="March";  break; }
case "4" :{ word="April";  break; }
case "5" :{ word="May";  break; }
case "6" :{ word="June";  break; }
case "7" :{ word="July";  break; }
case "8" : {word="August";  break; }
case "9" :{ word="September";  break; }
case "10" :{ word="October";  break; }
case "11" :{ word="November";  break; }
case "12" :{ word="December";  break; }
default:{alert("Wrong entry!");}
}  
alert("You found month:" +word);

}
</script>
</head>
<body>
Enter digits for finding month: <input type="text" id="num">
<br><br>
<center><input type="button" onclick="month()" value="Click for month name"></center>
</body>
</html>