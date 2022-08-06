const button = document.querySelector('.btn');
button.addEventListener('click', result);

function result(e) {
  e.preventDefault();

  let points = 0;

  if(document.querySelector('#correctAnswerOne').checked) {
    points ++;
  }

  if(document.querySelector('#correctAnswerTwo').checked) {
    points ++;
  }

  if(document.querySelector('#correctAnswerThree').checked) {
    points ++;
  }

  if(document.querySelector('#correctAnswerFour').checked) {
    points ++;
  }
  
  if(document.querySelector('#correctAnswerFive').checked) {
    points ++;
  }
}