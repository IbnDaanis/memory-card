import Header from './containers/Header'
import Instructions from './containers/Instructions'
import { useState } from 'react'

const App = () => {
  const [started, setStarted] = useState(false)
  return (
    <>
      <Header />
      <main>
        <Instructions started={started} setStarted={setStarted} />
      </main>
    </>
  )
}

export default App
