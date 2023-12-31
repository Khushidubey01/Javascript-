<html>
<head>
<script type="text/javascript">
function check()
{var a=document.getElementById("num").value;
if(a%2==0)
{alert("Even number");}
if(a%2!=0)
{alert("Odd number");}

}
</script>
</head>
<body>
Enter any number:<input type="number" id="num">
<br><br>
<input type="button" onclick="check()" value="check">
</body>
</htm>