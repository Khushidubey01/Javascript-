<html>
<head>
<script type="text/javascript">
function printvalue()
{var n=document.form1.name.value;
var fn=document.form1.fathersname.value;
var ad=document.form1.address.value;
document.writeln("Welcome this form<br>");
document.write("Your name:"+n);
document.write("<br>Your Father's name:"+fn);
document.write("<br>Your address is:"+ad);
}
</script>
</head>
<body>
<form name="form1">
Enter your name:<input type="text" name="name"><br>
Enter your Father's name:<input type="text" name="fathersname"><br>
address:<textarea name="address"></textarea>
<br><br>
<input type="button" onclick="printvalue()" value="print value" >
</form>
</body>
</html>