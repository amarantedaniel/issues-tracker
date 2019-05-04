import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { Query } from 'react-apollo'
import client from 'api/client'
import { fetchIssues } from 'api/queries'
import { parseIssues } from 'api/parser'

const Board = () => {
  return (
    <ApolloProvider client={client}>
      <Query query={fetchIssues}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...'
          if (error) return error.message
          return parseIssues(data).map(issue => (
            <Issue key={issue.id} title={issue.title} state={issue.state} />
          ))
        }}
      </Query>
    </ApolloProvider>
  )
}

const Issue = ({ title, state }) => (
  <div>
    {title}
    {state}
  </div>
)

export default Board
