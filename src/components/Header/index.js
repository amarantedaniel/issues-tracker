import React from 'react'
import { Mutation } from 'react-apollo'
import { parseRepository } from 'api/parser'
import { createIssue, fetchIssues } from 'api/queries'

const Header = ({ error, loading, data }) => (
  <Mutation
    mutation={createIssue}
    update={(
      cache,
      {
        data: {
          createIssue: { issue },
        },
      },
    ) => {
      const cached = cache.readQuery({ query: fetchIssues })
      const newCached = {
        ...cached,
        repository: {
          ...cached.repository,
          issues: {
            ...cached.repository.issues,
            edges: [
              ...cached.repository.issues.edges,
              { node: issue, __typename: 'IssueEdge' },
            ],
          },
        },
      }
      cache.writeQuery({
        query: fetchIssues,
        data: newCached,
      })
    }}
  >
    {createIssue => {
      const handleClick = () => {
        const { id } = parseRepository(data)
        createIssue({
          variables: { repositoryId: id, title: 'I have created a new thing' },
        })
      }
      return <button onClick={handleClick}>Add Issue</button>
    }}
  </Mutation>
)

export default Header
