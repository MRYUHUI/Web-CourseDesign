document.querySelector('.headerBg').style.opacity = '0';
function getScrollTop() {
  var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
  if (document.body) {
    bodyScrollTop = document.body.scrollTop;
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop;
  }
  scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
  return scrollTop;
}
window.onscroll = function () {
  if (getScrollTop() == 0) {
    document.querySelector('.headerBg').style.opacity = '0';
  }
  else {
    document.querySelector('.headerBg').style.opacity = '1';
  }
};

//判断元素是否进入可视区域
const isEnterToScreen = function (element) {
  const elementHeight = element.clientHeight;
  const elementOffSetTop = element.offsetTop;
  const windowHeight = document.documentElement.clientHeight;
  const windowScrollTop = document.documentElement.scrollTop;
  if ((windowScrollTop <= elementOffSetTop + elementHeight)
    && (windowScrollTop >= elementOffSetTop - windowHeight))
    return true;
  else return false;
}








const tltleFont = document.querySelector('.titleFont');

const isEnterToScreenY = function (element, tag) {
  const elementHeight = element.clientHeight;
  const elementOffSetTop = element.offsetTop;
  const windowHeight = document.documentElement.clientHeight;
  const windowScrollTop = document.documentElement.scrollTop;
  if ((windowScrollTop <= elementOffSetTop + elementHeight) && (windowScrollTop >= elementOffSetTop - windowHeight)) {
    element.style.transform = 'translateY(0)';
    element.style.opacity = '1';
  }
  else {
    element.style.transform = `translateY(${tag}20rem)`;
    element.style.opacity = '0';
  }
}
const isEnterToScreenX = function (element, tag) {
  const elementHeight = element.clientHeight;
  const elementOffSetTop = element.offsetTop;
  const windowHeight = document.documentElement.clientHeight;
  const windowScrollTop = document.documentElement.scrollTop;
  if ((windowScrollTop <= elementOffSetTop + elementHeight) && (windowScrollTop >= elementOffSetTop - windowHeight)) {
    element.style.transform = 'translateX(0)';
    element.style.opacity = '1';
  }
  else {
    element.style.transform = `translateX(${tag}20rem)`;
    element.style.opacity = '0';
  }
}
document.addEventListener('scroll', function () {
  isEnterToScreenY(tltleFont, -1)
  isEnterToScreenX(theFont, -1);
  isEnterToScreenX(thePad, 1);
  isEnterToScreenY(beginRecommand, 1);
  if (isEnterToScreen(document.querySelector('.accordion label'))) {
    document.querySelector('.viewFrame').style.transition = 'all 3s';
    document.getElementById('ac-1').checked = true;
  }
  else {
    document.getElementById('ac-1').checked = false;
  }
});
const theFont = document.querySelector('.theFont');
const thePad = document.querySelector('.thePad');
const beginRecommand = document.querySelector('.beginRecommand');
window.onload = function () {
  theFont.style.transform = 'translateX(0)';
  theFont.style.opacity = '1';
  thePad.style.transform = 'translateX(0)';
  thePad.style.opacity = '1';
  beginRecommand.style.transform = 'translateY(0)';
  beginRecommand.style.opacity = '1';
}

document.querySelector('.final a').addEventListener('click', function () {
  alert('您還未登錄，請先點擊Sign up登錄');
})