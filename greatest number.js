<html>
<head>
<script type="text/javascript">
function check()
{var a=document.getElementById("num1").value;
var b=document.getElementById("num2").value;
var c=document.getElementById("num3").value;
a=new Number(a);
b=new Number(b);
c=new Number(c);
if(a>b&&a>c)
{alert("greatest number is:"+a);}
if(b>c&&b>a)
{alert("greatest number is:"+b);}
if(c>a&&c>b)
{alert("greatest number is:"+c);}
}
</script>
</head>
<body>
Enter first number:<input type="number" id="num1">
<br>

Enter second number:<input type="number" id="num2"><br>
Enter third number:<input type="number" id="num3">
<br>
<br><br>
<input type="button" onclick="check()" value="check">
</body>
</html>