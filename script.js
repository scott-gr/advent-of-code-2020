function clickreveal() {
  let revealBtn = document.querySelector('.reveal-button');
  let codeText = document.querySelector('.code-text');
  revealBtn.classList.replace('show', 'hide');
  codeText.classList.replace('hide', 'show');
}
