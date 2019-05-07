import React from 'react'
import Issue from 'components/Issue'

const Column = ({ issues = [] }) =>
  issues.map(issue => (
    <Issue key={issue.id} title={issue.title} state={issue.state} />
  ))

export default Column
