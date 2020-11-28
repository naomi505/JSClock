
function clock(){
  var fullDate = new Date();
  var hours = fullDate.getHours();
  var mins = fullDate.getMinutes();
  var secs = fullDate.getSeconds();

  if (hours >= 12) { 
     var m = "PM"; 
    } 
  if (hours < 12) {  
    var m = "AM"; 
    } 

  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = ":"+ mins;document.getElementById("second").innerHTML =":"+ secs + m;
}

setInterval(clock, 100)