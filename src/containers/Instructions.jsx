import { useState } from 'react'

const Instructions = ({ started, setStarted }) => {
  const [hidden, setHidden] = useState(false)

  return (
    <section
      className={`instructions ${started && ' hidden'} ${hidden && ' none'}`}
    >
      <div className='container'>
        <h1 className='title'>How to Play?</h1>
        <ol>
          <li>Click on a club logo you haven't clicked on before</li>
          <li>Earn points every time you click on a new logo</li>
          <li>
            If you click on a logo you've clicked on before, your points get
            reset!
          </li>
        </ol>
        <button
          className='start'
          disabled={started}
          onClick={() => {
            setStarted(!started)
            setTimeout(() => {
              setHidden(true)
            }, 500)
          }}
        >
          Start
        </button>
      </div>
    </section>
  )
}

export default Instructions
