import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const Board = () => {
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
          if (loading) return 'Loading...'
          if (error) return error.message

          return data.repository.issues.edges.map(edge => (
            <Issue
              key={edge.node.id}
              title={edge.node.title}
              state={edge.node.state}
            />
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

const myQuery = gql`
  {
    repository(owner: "amarantedaniel", name: "issues-tracker") {
      issues(first: 20) {
        pageInfo {
          endCursor
        }
        edges {
          node {
            id
            title
            state
          }
        }
      }
    }
  }
`

export default Board
