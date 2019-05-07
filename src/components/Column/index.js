import React from 'react'
import { Mutation } from 'react-apollo'
import Issue from 'components/Issue'
import map from 'lodash/map'
import { closeIssue, reopenIssue } from 'api/queries'
import './column.scss'

const Column = ({ issues = [], type }) => {
  const toggle = type === 'OPEN' ? closeIssue : reopenIssue
  return (
    <div className="flex flex-column column">
      <h2 className="column__title">{type}</h2>
      <Mutation mutation={toggle}>
        {toggle => (
          <div className="column__body">
            {map(issues, issue => (
              <Issue
                key={issue.id}
                issue={issue}
                onClick={() => {
                  toggle({ variables: { issueId: issue.id } })
                }}
              />
            ))}
          </div>
        )}
      </Mutation>
    </div>
  )
}

export default Column
