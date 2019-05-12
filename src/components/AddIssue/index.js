import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import Modal from 'components/Modal'
import { createIssue } from 'api/queries'
import { addIssueToCache } from 'api/cache'

const AddIssueModal = ({ open, onClose, repository }) => (
  <Modal open={open} onClose={onClose}>
    <Mutation mutation={createIssue} update={addIssueToCache}>
      {createIssue => (
        <AddIssue
          repository={repository}
          createIssue={createIssue}
          onSubmit={onClose}
        />
      )}
    </Mutation>
  </Modal>
)

const AddIssue = ({ repository, createIssue, onSubmit }) => {
  const [title, setTitle] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    createIssue({ variables: { repositoryId: repository.id, title: title } })
    onSubmit()
  }

  return (
    <form className="flex flex-column" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <input type="submit" />
    </form>
  )
}

export default AddIssueModal
