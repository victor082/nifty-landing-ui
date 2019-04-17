let button = document.querySelector('.welcomeBox .signUpBtn')
button.addEventListener('mouseenter', (event) => {
    button.style.background = 'white'
    button.style.color = '#3384c6'
    button.innerHTML = 'SIGN UP'
  })
  button.addEventListener('mouseleave', (event) => {
    button.style.background = '#3384c6'
    button.style.color = 'white'
    button.innerHTML = 'GET STARTED'
  })