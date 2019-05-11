import React from 'react'
import Column from 'components/Column'
import { parseIssues } from 'api/parser'

const Board = ({ loading, error, data }) => {
  if (loading) return 'Loading...'
  if (error) return error.message
  const { OPEN, CLOSED } = parseIssues(data)
  return (
    <div className="flex flex-row">
      <Column issues={OPEN} type="OPEN" />
      <Column issues={CLOSED} type="CLOSED" />
    </div>
  )
}

export default Board
