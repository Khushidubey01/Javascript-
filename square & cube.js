<html>
<head>
<script type="text/javascript">

function square()
{var n=document.getElementById("number").value;
var s=n*n;
alert("square: "+s);
}
function cube()
{var n=document.getElementById("number").value;
var c=n*n*n;
alert("Cube: "+c);
}
</script>
</head>
<body>
Enter any number:<input type="text" id="number"><br><br>
<input type="button" onclick="square()" value="square">
<input type="button" onclick="cube()" value="cube">
</body>
</html>