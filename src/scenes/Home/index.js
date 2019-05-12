import React from 'react'
import Board from 'components/Board'
import Header from 'components/Header'
import { ApolloProvider } from 'react-apollo'
import { Query } from 'react-apollo'
import client from 'api/client'
import { fetchIssues } from 'api/queries'
import { parseRepository, parseIssues } from 'api/parser'

const HomeContainer = () => (
  <ApolloProvider client={client}>
    <Query
      query={fetchIssues}
      variables={{ name: 'issues-tracker', owner: 'amarantedaniel' }}
    >
      {({ loading, error, data }) => (
        <Home loading={loading} error={error} data={data} />
      )}
    </Query>
  </ApolloProvider>
)

const Home = ({ data, loading, error }) => (
  <div>
    <Header
      loading={loading}
      error={error}
      repository={!loading && !error && parseRepository(data)}
    />
    <Board
      loading={loading}
      error={error}
      issues={!loading && !error && parseIssues(data)}
    />
  </div>
)

export default HomeContainer
