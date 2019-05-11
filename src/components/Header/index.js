import React from 'react'
import { Mutation } from 'react-apollo'
import { parseRepository } from 'api/parser'
import { createIssue } from 'api/queries'
import { addIssueToCache } from 'api/cache'

const Header = ({ error, loading, data }) => (
  <Mutation mutation={createIssue} update={addIssueToCache}>
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
