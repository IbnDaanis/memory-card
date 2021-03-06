import { useEffect, useState } from 'react'
import { eplTeams } from '../data/epl-teams'
import ClubLogo from '../components/ClubLogo'
import { v4 as uuidv4 } from 'uuid'

const GameBoard = ({ started }) => {
  const [none, setNone] = useState(true)
  const [score, setScore] = useState(0)
  const [teams, setTeams] = useState([])
  const [data, setData] = useState([])
  const [won, setWon] = useState(false)

  const randomTeams = () => {
    const arr = []
    const unpickedTeams = []
    eplTeams.forEach((team, index) => {
      if (teams.indexOf(team.name) === -1) {
        unpickedTeams.push(index)
      }
    })
    let random = Math.floor(Math.random() * unpickedTeams.length)
    arr.push(random)
    while (arr.length < 4) {
      let random = Math.floor(Math.random() * 8)
      if (arr.indexOf(random) === -1) arr.push(random)
    }
    const chosenTeams = []
    arr.forEach(index => {
      eplTeams.forEach((team, i) => {
        if (index === i) chosenTeams.push(team)
      })
    })
    setData(chosenTeams)
  }
  useEffect(() => {
    randomTeams()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    setTimeout(() => {
      started && setNone(false)
    }, 500)
  }, [started])

  const handleClick = ({ name }) => {
    if (score === 20) {
      setWon(true)
      return
    }
    randomTeams()
    if (teams.find(team => team === name)) {
      setScore(0)
      setTeams([])
    } else {
      setTeams(teams => [...teams, name])
      setScore(score => score + 1)
    }
  }

  return (
    <section
      className={`gameboard ${none && ' hidden'} ${!started && ' none'}`}
    >
      <div className='score'>
        <h2>{won ? 'You won!' : `Score: ${score}`}</h2>
      </div>
      <div className='container'>
        {data.map(team => (
          <ClubLogo team={team} key={uuidv4()} handleClick={handleClick} />
        ))}
      </div>
    </section>
  )
}

export default GameBoard
