const lis = document.querySelectorAll('nav ul li');
document.querySelector(`.frame-0`).style.display = 'block';
lis[0].classList.add('navWasSelected');
for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener('click', function () {
    for (let j = 0; j < lis.length; j++) {
      document.querySelector((`.frame-${j}`)).style.display = 'none';
      lis[j].classList.remove('navWasSelected');
    }
    document.querySelector((`.frame-${i}`)).style.display = 'block';
    lis[i].classList.add('navWasSelected');
  })
} 5