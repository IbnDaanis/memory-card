import React from 'react'
import { eplTeams } from './data/epl-teams'
import { v4 as uuidv4 } from 'uuid'

const App = () => {
  return (
    <div>
      {eplTeams.map(team => (
        <img src={team.path} alt={team.name} key={uuidv4()} />
      ))}
    </div>
  )
}

export default App
