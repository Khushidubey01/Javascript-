<html>
<head>
<script type="text/javascript">
function check()
{
var n=document.getElementById("num").value;
n=new Number(n);
if(n==1)
{
alert("You got a laddu");
}
if(n==2)
{
alert("you got 10 rupees");
}
if(n==3)
{
alert("you got a flower");
}
if(n==4)
{
alert("You got a burger");
}
if(n==5)
{
alert("you got a chocolate");
}
if(n==6)
{
alert("you got a flower of lotus");
}
if(n==7)
{
alert("You got a book of 'c' language");
}
if(n==8)
{
alert("you have a very good nature");
}
if(n==9)
{
alert("you got a book of mathematics");
}
if(n==10)
{
alert("you have a very kind nature ");
}
}
</script>
</head>
<body>
Enter any number from 1 to10:<input type="Number" id="num"><br><br>
<br><br>
<center><input type="button" onclick="check()" value="Check your luck"></center>
</body>
</html>