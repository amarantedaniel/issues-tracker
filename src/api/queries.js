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

export const closeIssue = gql`
  mutation CloseIssue($issueId: ID!) {
    closeIssue(input: { issueId: $issueId }) {
      issue {
        id
      }
    }
  }
`

export const reopenIssue = gql`
  mutation ReopenIssue($issueId: ID!) {
    reopenIssue(input: { issueId: $issueId }) {
      issue {
        id
      }
    }
  }
`

export { fetchIssues }
