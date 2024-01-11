<html>
<body bgcolor="lightblue">
<script type="text/javascript">
var arr=[1,2,3,4,5];
var i;
for(i=0;i<arr.length;i++)
{
document.write(arr[i]+"  ");}

document.write("<br> Deleting  first element:"+arr.shift());
document.write("<br>After deleting first element array<br>");
for(i=0;i<arr.length;i++)
{
document.write(arr[i]+"  ");}

document.write("<br> Deleting  second element:"+arr.shift());
document.write("<br>After deleting second element array<br>");
for(i=0;i<arr.length;i++)
{
document.write(arr[i]+"  ");}
</script>
</body>
</html>