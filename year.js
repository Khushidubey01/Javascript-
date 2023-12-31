<html>
<head>
<script type="text/javascript">
function check()
{
var year=document.getElementById("year").value;
if(year%100==0)
{if(year%400==0)
{alert("Leap year");}
if(year%400!=0)
{alert("not leap year");}
}
if(year%100!=0)
{
if(year%4==0)
{alert("leap year");}
if(year%4!=0)
{alert("Not leap year");}
}
}
</script>
</head>
<body>
Enter any year: <input type="Number" id="year">
<br><br><input type="button" onclick="check()" value="check">
</body>
</html>