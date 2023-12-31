<html>
<head>
<script type="text/javascript">
function week()
{
var a=document.getElementById("num").value;

var word;

switch(a)
{
case "0" :{ word="Sunday";  break; }
case "1" :{ word="Monday";  break; }
case "2" : {word="Tuesday";  break; }
case "3" :{ word="Wednesday";  break; }
case "4" :{ word="Thursday";  break; }
case "5" :{ word="Friday";  break; }
case "6" :{ word="Saturday";  break; }
default:{alert("Wrong entry!");}
}  
alert("Day:"+word);

}
</script>
</head>
<body>
Enter digits for finding days: <input type="text" id="num">
<br><br>
<center><input type="button" onclick="week()" value="Find your days"></center>
</body>
</html>