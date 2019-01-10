var first = document.querySelector('#number1');
var button1 = document.querySelector('#button1');
var button2 = document.querySelector('#button2');
var button3 = document.querySelector('#button3');

var result1 = document.querySelector('.result1');

if (!!window.Worker) {
  var myWorker = new Worker("worker.js");

  button1.addEventListener('click', function (event) {
    result1.textContent = "Iteration InProgress " + first.value;
    myWorker.postMessage([first.value]);
    console.log('Message posted to worker');
  })

  myWorker.onmessage = function (e) {
    result1.textContent = "Iteration completed " + e.data;
    alert(e.data, 'Message received from worker', e.lastEventId);
    console.log(e.lastEventId);
  }
}

button2.addEventListener('click', function (event) {
  result1.textContent = "Iteration InProgress " + first.value;
  for (var i = 0; i <= first.value; i += 1) {
    var j = i;
  }
  alert(j, 'Non worker');
})

button3.addEventListener('click', function (event) {
  alert('test click');
})

var form = document.querySelector('form');

form.onsubmit = function (e) {
  e.preventDefault();
};