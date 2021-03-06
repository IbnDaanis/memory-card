import React from 'react'

const ClubLogo = ({ team, handleClick }) => {
  return (
    <div className='logo' onClick={() => handleClick(team)}>
      <img src={team.path} alt={team.title} draggable='false' />
    </div>
  )
}

export default ClubLogo
