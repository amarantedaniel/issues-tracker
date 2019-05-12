import React from 'react'
import Column from 'components/Column'

const Board = ({ loading, error, issues }) => {
  if (loading) return 'Loading...'
  if (error) return error.message
  const { OPEN, CLOSED } = issues
  return (
    <div className="flex flex-row">
      <Column issues={OPEN} type="OPEN" />
      <Column issues={CLOSED} type="CLOSED" />
    </div>
  )
}

export default Board
