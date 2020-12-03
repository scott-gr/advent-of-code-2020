const revealBtn = document.getElementsByClassName('reveal-button');
const codeText = document.getElementsByClassName('code-text');


const clickreveal = () => {
  codeText.classList.add('show');
  revealBtn.classList.remove('hide');
};


