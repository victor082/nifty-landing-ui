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