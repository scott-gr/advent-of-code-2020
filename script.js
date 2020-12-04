const revealBtn = document.querySelector('.reveal-button');
const codeText = document.querySelector('.code-text');

const pageLoad = () => {
  if (revealBtn.classList.contains('hide')) {
    revealBtn.classList.replace('hide', 'show');
  }
  if (codeText.classList.contains('show')) {
    codeText.classList.replace('show', 'hide');
  }
};

const clickreveal = () => {
  revealBtn.classList.replace('show', 'hide');
  codeText.classList.replace('hide', 'show');
};
