import React from 'react'
import { Mutation } from 'react-apollo'
import { parseRepository } from 'api/parser'
import { createIssue } from 'api/queries'
import { addIssueToCache } from 'api/cache'
import AddIssue from 'components/AddIssue'

const Header = ({ data }) => (
  <Mutation mutation={createIssue} update={addIssueToCache}>
    {createIssue => {
      const handleClick = () => {
        const { id } = parseRepository(data)
        createIssue({
          variables: { repositoryId: id, title: 'I have created a new thing' },
        })
      }
      return (
        <div>
          <button onClick={handleClick}>Add Issue</button>
          <AddIssue />
        </div>
      )
    }}
  </Mutation>
)

export default Header
