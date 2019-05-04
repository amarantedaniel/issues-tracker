import gql from 'graphql-tag'

const fetchIssues = gql`
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

export { fetchIssues }
