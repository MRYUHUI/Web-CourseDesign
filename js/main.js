const containerLeftList = document.querySelectorAll('.containLeft ul li');
containerLeftList[0].classList.add('titleChoice');
document.querySelector(`.frame-0`).style.display = 'block';
const n = containerLeftList.length;
for (let i = 0; i < n; i++) {
  containerLeftList[i].addEventListener('click', function () {
    for (let j = 0; j < n; j++) {
      document.querySelector((`.frame-${j}`)).style.display = 'none';
      containerLeftList[j].classList.remove('titleChoice');
    }
    document.querySelector((`.frame-${i}`)).style.display = 'block';
    containerLeftList[i].style.color = '#fff';
    containerLeftList[i].classList.add('titleChoice');
  });
}
