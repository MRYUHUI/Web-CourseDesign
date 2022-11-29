const loginFrame = document.querySelector('.loginFrame');
loginFrame.style.top = '50%';
// loginFrame.style.left = '50%';
// loginFrame.style.transform = 'translate(-50%, -50%)';
loginFrame.style.transform = 'translateY(0)';
loginFrame.style.opacity = '1';


const verificationCode = document.querySelector('.verify img');
const verificationCodeStr = ['28ivw', 'k4ez', 'fh2de', '4d7ys'];
verificationCode.src = 'img/verify-0.png';
let curVerifition = 0, newVerifition = 0;
const nextVerifition = function () {
  while (newVerifition == curVerifition)
    newVerifition = parseInt(Math.random() * 4);
  curVerifition = newVerifition;
  verificationCode.src = `img/verify-${curVerifition}.png`;
}
verificationCode.addEventListener('click', function () {
  nextVerifition();
})

const registerButton = document.querySelector('.register .button input');
registerButton.addEventListener('click', function () {
  let temp = document.querySelector('.textArea2 div input').value;
  if (temp.toLowerCase() != verificationCodeStr[curVerifition]) {
    document.querySelector('.isVerifitionCorr').innerHTML = '驗證碼錯誤！';
    nextVerifition();
  }
  else {
    toLogin();
  }
})
const login = document.querySelector('.login');
const register = document.querySelector('.register');
const checkbox = document.getElementById('checkbox');
const _switch = document.querySelector('.switch');
const theType = document.querySelector('.switch p');
const toLogin = function () {
  login.style.opacity = '1';
  register.style.opacity = '0';
  register.style.zIndex = '-999';
  loginFrame.style.height = '50rem';
  theType.innerHTML = '注冊';
}
const toRegister = function () {
  login.style.opacity = '0';
  register.style.opacity = '1';
  register.style.zIndex = '999';
  loginFrame.style.height = '70rem';
  theType.innerHTML = '登錄';
}
_switch.addEventListener('click', function () {
  if (!checkbox.checked) toRegister();
  else toLogin();
})