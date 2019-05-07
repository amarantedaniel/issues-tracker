import React from 'react'
import Issue from 'components/Issue'
import map from 'lodash/map'

const Column = ({ issues = [] }) =>
  map(issues, issue => <Issue key={issue.id} issue={issue} />)

export default Column
