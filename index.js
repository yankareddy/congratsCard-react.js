const element = (
  // Write your code here.
  <div className='main-container'>
    <h1 className='heading'>Congratulation</h1>
    <div className='card-container'>
      <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png' />
      <h1 className='head'>Kiran V</h1>
      <p className='para'>
        Vishnu Institute of Computer Education and Technology. Bhimavaram
      </p>
      <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
