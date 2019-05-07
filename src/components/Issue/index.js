import React from 'react'
import { Mutation } from 'react-apollo'
import { closeIssue, reopenIssue } from 'api/queries'

const Issue = ({ issue }) => (
  <Mutation mutation={closeIssue}>
    {mutate => (
      <div>
        <span>{issue.title}</span>
        <span>{issue.state}</span>
        <button onClick={() => mutate({ variables: { issueId: issue.id } })}>
          reopen issue
        </button>
      </div>
    )}
  </Mutation>
)

export default Issue
