let button = document.querySelector('.welcomeBox .signUpBtn')
button.addEventListener('mouseenter', (event) => {
    button.style.background = 'white'
    button.style.color = '#3384c6'
    button.innerHTML = 'SIGN UP'
  })
  button.addEventListener('mouseleave', (event) => {
    button.style.background = 'linear-gradient(to right, #3384c6, #25b7c4)'
    button.style.background = 'gradient(left, #3384c6, #25b7c4)'
    button.style.color = 'white'
    button.innerHTML = 'GET STARTED'
  })
  var accItem = document.getElementsByClassName('accordionItem');
  var accHD = document.getElementsByClassName('accordionItemHeading');
  for (i = 0; i < accHD.length; i++) {
      accHD[i].addEventListener('click', toggleItem, false);
  }
  function toggleItem() {
      var itemClass = this.parentNode.className;
      for (i = 0; i < accItem.length; i++) {
          accItem[i].className = 'accordionItem close';
      }
      if (itemClass == 'accordionItem close') {
          this.parentNode.className = 'accordionItem open';
      }
  }
  