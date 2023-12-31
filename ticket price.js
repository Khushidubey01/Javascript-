<html>
<head>
<script type="text/javascript">
function ticket()
{
var name=document.getElementById("name").value;
var age=document.getElementById("age").value;
if(age<12)
{
alert("Hello mr./miss"+name+"\nyour ticket price :5rs");
}
if(age<18)
{
alert("Hello mr./miss"+name+"\nyour ticket price :10rs");
}
if(age<60)
{
alert("Hello mr./miss"+name+"\nyour ticket price :20rs");
}
if(age>=60)
{
alert("Hello mr./miss"+name+"\nyour ticket price :15rs");
}
}
</script>
</head>
<body>
Enter customer name:<input type="text" id="name"><br><br>
Enter your age :<input type="number" id="age">
<br><br>
<center><input type="button" onclick="ticket()" value="Know your ticket price"></center>
</body>
</html>


</body>
</html>