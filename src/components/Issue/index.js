import React from 'react'
import './issue.scss'

const Issue = ({ issue, onClick }) => (
  <div className="flex flex-column items-center issue">
    <span>{issue.title}</span>
    <span>{issue.state}</span>
    <button onClick={onClick}>toggle</button>
  </div>
)

export default Issue
