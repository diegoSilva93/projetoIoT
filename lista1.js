function mudar() {
  alert('New text changed');
  document.getElementById('result').innerHTML = '';
  for (let i = 0; i < 10; i++ ) {
    document.getElementById('result').innerHTML += (i + 1) + ' - Mudou!<br>';
  }
}

function on(id) {
  document.getElementById(id).src = './Lon.png'
	sendToApi(1);	
}

function off(id) {
  document.getElementById(id).src = './Loff.png'
	sendToApi(0);	
}
function sendToApi(state){
	var http = new XMLHttpRequest();
	http.open('GET','https://api.thingspeak.com/update?api_key=XDVKPVZNZWEW718H&field1='+state);
	http.send();
	http.onload = console.log(http.responseText+"-"+state);

}

