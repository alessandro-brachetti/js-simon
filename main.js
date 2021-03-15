$( document ).ready(function() {

//La pagina espone 5 numeri generati casualmente
var rNumbers = [];
while(rNumbers.length < 5){
    var random = Math.floor(Math.random() * 100) + 1;
    if(rNumbers.indexOf(random) === -1) rNumbers.push(random);
}
console.log(rNumbers);

$('#rNumbers').text('Hai 30 secondi per memorizzare questi numeri: ' + rNumbers);

var userNumbs = [];

// //Da li parte un timer di 30 secondi
var count = 3;
var timer = setInterval(function(){

if(count <= 0) {
  clearInterval(timer);
  $('#rNumbers').hide();
  $('#timer').text('Tempo Scaduto! Ora aspetta altri 30 secondi...');

//Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri tramite il prompt()
  var delay = setTimeout(function(){
    var times = 0;

    while (times < 5) {
      var numbs = parseInt(prompt('Inserisci un numero:'));
      userNumbs.push(numbs);
      times++
    }
    console.log(userNumbs);
  }, 3000);


}else {
  $('#timer').text(count + ' secondi rimasti');
}
  count--;

},1000);

//il software dice quanti e quali dei numeri da indovinare sono stati individuati


// console.log(rNumbers);
// console.log(userNumbs);



});
