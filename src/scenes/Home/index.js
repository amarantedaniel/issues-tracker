import React from 'react'
import Board from 'components/Board'
import Header from 'components/Header'
import { ApolloProvider } from 'react-apollo'
import { Query } from 'react-apollo'
import client from 'api/client'
import { fetchIssues } from 'api/queries'

const Home = () => (
  <ApolloProvider client={client}>
    <Query query={fetchIssues}>
      {({ loading, error, data }) => (
        <div>
          <Header loading={loading} error={error} data={data} />
          <Board loading={loading} error={error} data={data} />
        </div>
      )}
    </Query>
  </ApolloProvider>
)

export default Home
