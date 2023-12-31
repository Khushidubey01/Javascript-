<html>
<head>
<script type="text/javascript">
function printvalue()
{var n=document.form1.name.value;
var fn=document.form1.fathersname.value;
var ad=document.form1.address.value;
var g=document.form1.gender.value;
document.writeln("Welcome this form<br>");
document.write("Your name:"+n);
document.write("<br>Your Father's name:"+fn);
document.write("<br>Your address is:"+ad);
document.write("<br>Your gender is :"+g);
}
</script>
</head>
<body>
<form name="form1">
Enter your name:<input type="text" name="name"><br><br>
Enter your Father's name:<input type="text" name="fathersname"><br><br>
address:<textarea name="address"></textarea><br><br>
Gender:Male<input type="radio" name="gender" value="male">&nbsp Female<input type="radio" name="gender" value="female"><br><br>
Language:Hindi<input type="checkbox" name="language" value="hindi">&nbsp English<input type="checkbox" name="language" value="english">Urdu<input type="checkbox" name="language" value="urdu">&nbsp French<input type="checkbox"name="language"value="french"><br><br>
<br><br>
<input type="button" onclick="printvalue()" value="print value" >
</form>
</body>
</html>