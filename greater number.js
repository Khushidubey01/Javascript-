<html>
<head>
<script type="text/javascript">
function check()
{var a=document.getElementById("num1").value;
var b=document.getElementById("num2").value;
a=new Number(a);
b=new Number(b);
if(a>b)
{alert("greater number is:"+a);}
if(b>a)
{alert("greater number is:"+b);}

}
</script>
</head>
<body>
Enter first number:<input type="number" id="num1">
<br>

Enter second number:<input type="number" id="num2">
<br><br>
<input type="button" onclick="check()" value="check">
</body>
</htm>