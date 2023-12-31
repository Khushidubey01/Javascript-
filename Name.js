<html>
<head>
<script type="text/javascript">
function printvalue()
{var name=document.form1.name.value;
alert("welcome:"+name);
}
</script>
<body>
<form name="form1">
Enter your name:<input type="text" name="name"><br><br>
<input type="button" onclick="printvalue()" value="print value">
</form>
</body>
</html>