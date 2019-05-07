import React from 'react'
import { Mutation } from 'react-apollo'
import Issue from 'components/Issue'
import map from 'lodash/map'
import { closeIssue, reopenIssue } from 'api/queries'

const Column = ({ issues = [], type }) => {
  const toggle = type === 'OPEN' ? closeIssue : reopenIssue
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Mutation mutation={toggle}>
        {toggle =>
          map(issues, issue => (
            <Issue
              key={issue.id}
              issue={issue}
              onClick={() => {
                toggle({ variables: { issueId: issue.id } })
              }}
            />
          ))
        }
      </Mutation>
    </div>
  )
}

export default Column
