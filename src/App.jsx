import Header from './containers/Header'
import Instructions from './containers/Instructions'
import GameBoard from './containers/GameBoard'
import { useState } from 'react'

const App = () => {
  const [started, setStarted] = useState(false)
  return (
    <>
      <Header />
      <main>
        <Instructions started={started} setStarted={setStarted} />
        <GameBoard started={started} />
      </main>
    </>
  )
}

export default App
