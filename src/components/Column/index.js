import React from 'react'
import Issue from 'components/Issue'
import map from 'lodash/map'
import './column.scss'

const Column = ({ issues = [], type }) => (
  <div className="flex flex-column column">
    <h2 className="column__title">{type}</h2>
    <div className="column__body">
      {map(issues, issue => (
        <Issue key={issue.id} issue={issue} />
      ))}
    </div>
  </div>
)

export default Column
