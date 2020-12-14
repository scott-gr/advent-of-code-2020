const revealBtn = document.querySelectorAll('.reveal-button');
const codeText = document.querySelectorAll('.code-text');
const defaultOpen = document.querySelectorAll('.defaultOpen');
const tabcontent = document.querySelectorAll('.tabcontent');
const tablinks = document.querySelectorAll('.tablinks');
const hidden = document.querySelectorAll('.hide');
const shown = document.querySelectorAll('.show');
// const tabNumber = document.querySelector('#tabnum')

const pageLoad = () => {
  hidden.forEach((i) => {
    i.classList.replace('show', 'hide')
  });
  shown.forEach((i) => {
    i.classList.replace('hide', 'show')
  });
};

function defaultTab() {
  defaultOpen.click();
}

const clickreveal = () => {
  hidden.forEach((i) => {
    i.classList.replace('hide', 'show')
  });
  shown.forEach((i) => {
    i.classList.replace('show', 'hide')
  });
};

function openTab(event, tabNum) {
  // Declare all variables
  var i, tabcontent, tablinks;
  
  pageLoad();
  
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabNum).style.display = 'block';
  event.currentTarget.className += ' active';
}
