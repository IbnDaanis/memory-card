import { useEffect, useState } from 'react'
import { eplTeams } from '../data/epl-teams'
import ClubLogo from '../components/ClubLogo'
import { v4 as uuidv4 } from 'uuid'

const GameBoard = ({ started }) => {
  const [none, setNone] = useState(true)
  const [score, setScore] = useState(0)
  const [teams, setTeams] = useState([])
  const [data, setData] = useState(eplTeams)

  const randomTeams = () => {
    var arr = []
    while (arr.length < 8) {
      var r = Math.floor(Math.random() * 100) + 1
      if (arr.indexOf(r) === -1) arr.push(r)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      started && setNone(false)
    }, 500)
  }, [started])

  const handleClick = ({ name }) => {
    if (teams.find(team => team === name)) {
      console.log('Hello ', name)
      setScore(0)
      setTeams([])
    } else {
      setTeams(teams => [...teams, name])
      setScore(score => score + 1)
    }
  }

  useEffect(() => {
    console.log({ teams, score })
  }, [teams, score])

  return (
    <section
      className={`gameboard ${none && ' hidden'} ${!started && ' none'}`}
    >
      <div className='container'>
        <div className='score'>
          <h3>Score: {score}</h3>
        </div>
        {data.map(team => (
          <ClubLogo team={team} key={uuidv4()} handleClick={handleClick} />
        ))}
      </div>
    </section>
  )
}

export default GameBoard
