<html>
<head>
<script type="text/javascript">
function sum()
{var a=document.getElementById("firstnumber").value;
var b=document.getElementById("secondnumber").value;
a=new Number(a);
b=new Number(b);
var s=a+b;
alert("sum: "+s);
}
</script>
</head>
<body>
Enter first number:<input type="Number" id="firstnumber"><br><br>
Enter second number:<input type="Number" id="secondnumber"><br><br>
<input type="button" onclick="sum()" value="sum">

</body>
</html>