const clock = document.getElementById("clock");
//document.querySelector('#clock');


setInterval(() => {
    let date = new Date(); //if we take this outside the scope it doesn't get updated
   clock.innerHTML = date.toLocaleTimeString()
},1000);