import React from 'react'
import { Mutation } from 'react-apollo'
import cn from 'classnames'
import { closeIssue, reopenIssue } from 'api/queries'
import './issue.scss'

const Issue = ({ issue }) => {
  const toggle = issue.state === 'OPEN' ? closeIssue : reopenIssue
  return (
    <Mutation mutation={toggle}>
      {(toggle, { loading }) => (
        <div
          className={cn(
            'flex flex-column items-center issue',
            loading && 'issue--loading',
          )}
        >
          <span>{issue.title}</span>
          <span>{issue.state}</span>
          <button
            onClick={() => {
              toggle({ variables: { issueId: issue.id } })
            }}
          >
            toggle
          </button>
        </div>
      )}
    </Mutation>
  )
}

export default Issue
