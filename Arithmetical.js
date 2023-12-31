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
function sub()
{var a=document.getElementById("firstnumber").value;
var b=document.getElementById("secondnumber").value;
a=new Number(a);
b=new Number(b);
var s=a-b;
alert("sub: "+s);
}
function mul()
{var a=document.getElementById("firstnumber").value;
var b=document.getElementById("secondnumber").value;
a=new Number(a);
b=new Number(b);
var s=a*b;
alert("mul: "+s);
}
function div()
{var a=document.getElementById("firstnumber").value;
var b=document.getElementById("secondnumber").value;
a=new Number(a);
b=new Number(b);
var s=a/b;
alert("div: "+s);
}
</script>
</head>
<body>
Enter first number:<input type="text" id="firstnumber"><br><br>
Enter second number:<input type="text" id="secondnumber"><br><br>
<input type="button" onclick="sum()" value="sum">
<input type="button" onclick="sub()" value="sub">
<input type="button" onclick="mul()" value="mul">
<input type="button" onclick="div()" value="div">

</body>
</html>