<html>
<body>
<script type="text/javascript">
function movie(name,type,actor,duration)
{this.name=name;
this.type=type;
this.actor=actor;
this.duration=duration;
}
film=new movie("Sholey","Adventure","Amitabh and Dharmendra","3h.24.min");

document.write("Here all details of a film:<br>");
document.write("Name:"+film.name+"<br>Type:"+film.type+"<br>Actor:"+film.actor+"<br>Time_duration:"+film.duration);


</script>
</body>
</html>