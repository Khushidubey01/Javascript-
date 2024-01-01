<html>
<body>
<script type="text/javascript">
function pt(name,address,gender,age)
{this.name=name;
this.address=address;
this.gender=gender;
this.age=age;
}
patient=new pt("Shyam","Prayagraj","male",45);

document.write("Here all details of a patient<br>");
document.write("Name:"+patient.name+"<br>Address:"+patient.address+"<br>Gender:"+patient.gender+"<br>Age:"+patient.age);


</script>
</body>
</html>