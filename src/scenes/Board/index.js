import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { Query } from 'react-apollo'
import client from 'api/client'
import { fetchIssues } from 'api/queries'
import { parseIssues } from 'api/parser'
import Column from 'components/Column'

const Board = () => {
  return (
    <ApolloProvider client={client}>
      <Query query={fetchIssues}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...'
          if (error) return error.message
          const { OPEN, CLOSED } = parseIssues(data)
          return (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <Column issues={OPEN} type="OPEN" />
              <Column issues={CLOSED} type="CLOSED" />
            </div>
          )
        }}
      </Query>
    </ApolloProvider>
  )
}

export default Board
