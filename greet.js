<html>
<head>
<script type="text/javascript">
function greet()
{var name=document.getElementById("name").value;
var time=document.getElementById("time").value;
time=new Number(time);
var z=document.getElementById("z").value;

if(time>=1 && time<=12 && z=="AM")
{alert("Hello "+name+"\nGood morning");}

if(time>12 || time>=1 && time<=4 && z=="PM")
{alert("Hello "+name+"\nGood Ofternoon");}

if(time>4 && time<=7 && z=="PM")
{alert("Hello "+name+"\nGood Evening");}
if(time>7 && time<=12 && z=="PM")
{alert("Hello "+name+"\nGood Night");}


}
</script>
</head>
<body>
Enter your name:<input type="text" id="name"><br><br>
Enter current time:<input type="text" id="time">
<select id="z">
<option>AM</option>
<option>PM</option>
</select>
<br><br>
<center><input type="button" onclick="greet()" value="greet"></center>
</body>
</html>
