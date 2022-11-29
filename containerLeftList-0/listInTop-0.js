
// ad
const _case = document.querySelectorAll('._case');
const adImgs = document.querySelector('.ad ul');
let countTime = 0, countTimeTag = true;
let curImg = 0;
const mergeNextImg = function (i) {
  for (it of _case) it.classList.remove('_caseWasSelected');
  _case[i].classList.add('_caseWasSelected');
  adImgs.style.left = `${-i * 80}rem`;
}
const countTimeAdd = tag => {
  if (tag) countTime = (countTime + 1) % 10;
}

// 推荐部分

for (let i = 0; i < _case.length; i++) {
  _case[i].addEventListener('mouseenter', function () {
    countTime = 1;
    countTimeTag = false;
    curImg = i;
    mergeNextImg(i);
  })
  _case[i].addEventListener('mouseout', function () {
    countTimeTag = true;
  })
}

setInterval(function () {
  countTimeAdd(countTimeTag);
  if (countTime == 0) {
    mergeNextImg(curImg);
    curImg = (curImg + 1) % _case.length;
  }
}, 100)

// 最新音乐
const el_2Lis = document.querySelectorAll('.el-2 div');
for (let i = 0; i < el_2Lis.length; i++) {
  el_2Lis[i].addEventListener('mouseenter', function () {
    el_2Lis[i].style.cssText =
      `background: rgba(0, 0, 0, 0.24) url(img/listInTop-0/el2-${i}.jpg);
     background-size: 10rem 10rem;
     background-repeat: no-repeat;
     cursor: pointer;
     `
  })
  el_2Lis[i].addEventListener('mouseout', function () {
    el_2Lis[i].style.cssText =
      `background: url(img/listInTop-0/el2-${i}.jpg);
     background-size: 10rem 10rem;
     background-repeat: no-repeat;`
  })
  el_2Lis[i].style.cssText =
    `background: url(img/listInTop-0/el2-${i}.jpg);
  background-size: 10rem 10rem;
  background-repeat: no-repeat;`
}
