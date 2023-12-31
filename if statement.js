<html>
<head>
<script type="text/javascript">
function check()
{var a=document.getElementById("num").value;
if(a>0)
{alert("positive");}
if(a<0)
{alert("negative");}
}
</script>
</head>
<body>
Enter any number:<input type="number" id="num">
<br><br>
<center><input type="button" onclick="check()" value="check"></center>
</body>
</html>