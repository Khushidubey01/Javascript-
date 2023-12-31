<html>
<head>
</head>
<body>
<font size=5 color=fuchsia>
<script type="text/javascript">
document.write("This is global variable<br>");
var x=10;
function a()
{document.write(x,"<br>");
}
a();//function calling
function b()
{document.write(x);
}
b();//function calling
</script>
</font>
</body>
</html>