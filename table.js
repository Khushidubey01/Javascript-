<html>
<body>
<script type="text/javascript">
function numb()
{
var a;
a=document.getElementById("num").value;
for(var i=1;i<=10;i++)
{ document.write(i*a+"<br>  ");}
}
</script>
Enter any number:<input type="text" id="num"><br><br>
<center><input type="button" onclick="numb()" value="get table">
</center>
</body>
</html>