import React from 'react'

const Issue = ({ issue, onClick }) => (
  <div>
    <span>{issue.title}</span>
    <span>{issue.state}</span>
    <button onClick={onClick}>toggle</button>
  </div>
)

export default Issue
