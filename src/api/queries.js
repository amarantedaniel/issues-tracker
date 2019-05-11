import gql from 'graphql-tag'

const fetchIssues = gql`
  {
    repository(owner: "amarantedaniel", name: "issues-tracker") {
      id
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
        title
        state
      }
    }
  }
`

export const reopenIssue = gql`
  mutation ReopenIssue($issueId: ID!) {
    reopenIssue(input: { issueId: $issueId }) {
      issue {
        id
        title
        state
      }
    }
  }
`

export const createIssue = gql`
  mutation CreateIssue($repositoryId: ID!, $title: String!) {
    createIssue(input: { repositoryId: $repositoryId, title: $title }) {
      issue {
        id
        state
        title
      }
    }
  }
`

export { fetchIssues }
