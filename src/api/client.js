import ApolloClient from 'apollo-boost'

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

export default client
