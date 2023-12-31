<html>
<head>
<script type="text/javascript">
function prime()
{var a=document.getElementById("num").value;
var i=2;
while(i<a)
{
if(a%i==0)
{alert("Not prime number"); break;}
i++;}
if(i==a)
{alert("Prime number");}

}
</script>
</head>
<body>
Enter any number:<input type="text" id ="num"><br>
<br><center><input type="button" onclick="prime()" value="check"></center>
</body>
</html>