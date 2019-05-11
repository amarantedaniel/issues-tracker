import React from 'react'
import { Mutation } from 'react-apollo'
import Modal from 'components/Modal'
import { createIssue } from 'api/queries'
import { addIssueToCache } from 'api/cache'
import { parseRepository } from 'api/parser'

const AddIssueModal = ({ open, onClose, data }) => (
  <Modal open={open} onClose={onClose}>
    <AddIssue data={data} />
  </Modal>
)

const AddIssue = ({ data }) => (
  <Mutation mutation={createIssue} update={addIssueToCache}>
    {createIssue => {
      const handleSubmit = event => {
        event.preventDefault()
        const { id } = parseRepository(data)
        createIssue({
          variables: { repositoryId: id, title: 'I have created a new thing' },
        })
      }
      return (
        <form className="flex flex-column" onSubmit={handleSubmit}>
          <input type="text" />
          <input type="submit" />
        </form>
      )
    }}
  </Mutation>
)

export default AddIssueModal
