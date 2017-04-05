
document.getElementById('formularioPrincipal').addEventListener('submit', showTime)



function showTime(e){

	 var date=new Date();

	 //campurar los valores ingresados por el usuario
	 var dayEntered=document.getElementById('day').value
	 var monthEntered=document.getElementById('month').value
	 var monthActual=date.getMonth()+1;
	 var dayActual=date.getDate();

	 var yearTop

	 if (monthActual<=monthEntered){
	 	yearTop=date.getFullYear()
	 }else{
	 	yearTop=date.getFullYear()+1
	 }

	 // establecer la fecha tope hasta donde vamos a contar
	 var dateTop= monthEntered + " " + dayEntered + " " +  yearTop + " 24: 00: 00";
	 
	 //console.log(dateTop)

	 var countDownDate = new Date(dateTop).getTime();
	 // actualizar la cuenta Regresiva cada 1 segundo
	 var x = setInterval(function() {

	  //obtener el tiempo actual
	  var now = new Date().getTime();

	  //encontrar la distancia entre la la fecha actual y la fecha igresada
	  var distance = countDownDate - now;

	  // calcular el tiempo de horas, minutos y segundos
	  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	  // mostrar el resultado en el monitor principal 
	  if (monthActual==monthEntered && dayActual==dayEntered) {
	  	 document.getElementById("days").value=0 + "d"
		 document.getElementById("hours").value=0 + "h"
		 document.getElementById("minutes").value=0 + "m"
		 document.getElementById("seconds").value=0 + "s"
	  	
	  }else{
	  	 document.getElementById("days").value=days + "d"
		 document.getElementById("hours").value=hours + "h"
		 document.getElementById("minutes").value=minutes + "m"
		 document.getElementById("seconds").value=seconds + "s"
	  }
	 



	  
	

	  // if la cuenta termino escribir feliz cumpleaños
	  if (distance < 0) {
	    clearInterval(x);
	  }
	}, 1000);

	e.preventDefault()
}


