const revealBtn = document.getElementsByClassName('.reveal-button');
const codeText = document.getElementsByClassName('.code-text');
const defaultOpen = document.getElementsByClassName('.defaultOpen');

const pageLoad = () => {
  if (revealBtn.classList.contains('hide')) {
    revealBtn.classList.replace('hide', 'show');
  }
  if (codeText.classList.contains('show')) {
    codeText.classList.replace('show', 'hide');
  }
};

function defaultTab(){
  defaultOpen.click()
}

const clickreveal = () => {
  revealBtn.classList.replace('show', 'hide');
  codeText.classList.replace('hide', 'show');
};

function openTab(evt, tabNum) {
  let tabcontent, tablinks, i

  // Get all elements with class="tabcontent" and hide the
  for ( let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  // Get all elements with class="tablinks" and remove the class "active"

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.querySelector('#tabNum').style.display = 'block';
  evt.currentTarget.className += ' active';
}

