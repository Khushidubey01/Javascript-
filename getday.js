<html>
<body>
<script type="text/javascript">
var obj=new Date();
var a=obj.getDay();
var b;
switch(a)
{  
case 0 : { b="Sunday"; break;}
case 1 : { b="Monday"; break;}
case 2 : { b="Tuesday"; break;}
case 3 : { b="Wednesday"; break;}
case 4 : { b="Thursday"; break;}
case 5 : { b="Friday"; break;}
case 6 : { b="Saturday"; break;}
}
document.write("day is:"+b);
</script>
</body>
</html>