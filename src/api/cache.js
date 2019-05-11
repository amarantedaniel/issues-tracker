import { fetchIssues } from 'api/queries'

const addIssueToCache = (cache, data) => {
  const {
    data: {
      createIssue: { issue },
    },
  } = data
  const currentCache = cache.readQuery({ query: fetchIssues })
  const newCache = {
    ...currentCache,
    repository: {
      ...currentCache.repository,
      issues: {
        ...currentCache.repository.issues,
        edges: [
          ...currentCache.repository.issues.edges,
          { node: issue, __typename: 'IssueEdge' },
        ],
      },
    },
  }
  cache.writeQuery({ query: fetchIssues, data: newCache })
}

export { addIssueToCache }
