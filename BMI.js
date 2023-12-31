<html>
<head>
<script type="text/javascript" >
function CheckBMI()
{
var name=document.getElementById("name").value;
var w=document.getElementById("weight").value;
var h=document.getElementById("height").value;


w=new Number(w);
h=new Number(h);
h=h*0.3048;
var H=h*h;
var b=w/H;
if(b<18.5)
{alert("Hello "+name+"\n Your BMI is:"+b+"\nYou are Underweight");}

if(b>=18.5 && b<25)
{alert("Hello "+name+"\n Your BMI is:"+b+"\nYou are  Normal");}

if(b>=25 && b<=40)
{alert("Hello "+name+"\n Your BMI is:"+b+"\nYou are  Overweight");}

if(b>40)
{alert("Hello "+name+"\n Your BMI is:"+b+"\nYou are  Obeses");}
}
</script>
</head>
<body>
Enter your name:<input type="text" id="name">
<br><br>
Enter your weight in kg:<input type="text" id="weight">
<br><br>
Enter your height in foot:<input type="text" id="height">
<br><br>
<center><input type="button" onclick="CheckBMI()" value="Result"></center>
</body>
</html>