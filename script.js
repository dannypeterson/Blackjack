//Hit Me and stay button functions
const hitButton = document.querySelector('.hitButton')
const stayButton = document.querySelector('.stayButton')

const hitResponse = () => {
  console.log('You drew another card!')
}

const stayResponse = () => {
  console.log('You decided to stay')
}
hitButton.addEventListener('click', hitResponse)
stayButton.addEventListener('click', stayResponse)
