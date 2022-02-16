function shyam(){
	confirm("check your date before submit!!")
	x=document.getElementById("ram").value
	y=document.getElementById("jai").value

	if(x=="")
	{
		document.getElementById("ramji").innerHTML="name can't be blank"
		document.getElementById("ramji").style.color="red";
	}
	else if(y==""){
		document.getElementById("ramji").innerHTML="password can't be blank"
		document.getElementById("ramji").style.color="red";
	}
	else{
		document.getElementById("ramji").innerHTML="succesful submit"
		document.getElementById("ramji").style.color="green";

	}
	}
	// {

	// let c =document.getElementById("we").style.opacity=0;


	// }
	// function shyam3(){
	// 	let c =document.getElementById("we").style.opacity=1;
	// }
// 	function shyam6(){
// let date=new Date();
// alert(date.getDate());}
