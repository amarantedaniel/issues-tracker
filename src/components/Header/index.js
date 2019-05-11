import React from 'react'
import { parseRepository } from 'api/parser'

const Header = ({ error, loading, data }) => {
  console.log(parseRepository(data))
  const handleClick = () => {
    const { id } = parseRepository(data)
    console.log(id)
  }
  return <button onClick={handleClick}>Add Issue</button>
}

export default Header
