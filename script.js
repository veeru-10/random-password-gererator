const btn = document.querySelector('.generate');
const inputEle = document.querySelector('.input');
const copy = document.querySelector('.copy-icon');
const alertContainer = document.querySelector('.alert');


btn.addEventListener('click',()=> {
  createPassword()
});
copy.addEventListener('click', ()=> {
  copyPassword()
})

function createPassword() {
  const allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[{]};:',.<>/?`~";
  let password = '';
  const passLen = 10;
  for(let i = 0; i < passLen; i++) {
    const randomCharIndex = Math.floor(Math.random() * allCharacters.length)
    password += allCharacters.substring(randomCharIndex, randomCharIndex + 1);
  }
  input.value = password;
  alertContainer.innerText = password + " copied!";

}

function copyPassword() {
  inputEle.select(); //desktop
  inputEle.setSelectionRange(0, 9999); //mobile apps
  navigator.clipboard.writeText(inputEle.value);
  if(inputEle.value) {
    alertContainer.classList.add('show');
    setTimeout(()=> {
      alertContainer.classList.remove('show')
    }, 2000);
  }
}