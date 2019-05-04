import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const App = () => {
  const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    request: async operation => {
      operation.setContext({
        headers: {
          authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      })
    },
  })
  return (
    <ApolloProvider client={client}>
      <Query query={myQuery}>
        {({ loading, error, data }) => {
          console.log(loading)
          console.log(error)
          console.log(data)
          return <div />
        }}
      </Query>
    </ApolloProvider>
  )
}

const myQuery = gql`
  {
    repository(owner: "amarantedaniel", name: "matthias-ta-morrendo") {
      issues(first: 1) {
        pageInfo {
          endCursor
        }
        edges {
          node {
            id
            title
          }
        }
      }
    }
  }
`

export default App
