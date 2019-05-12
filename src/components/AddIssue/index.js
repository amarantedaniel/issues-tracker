import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import Modal from 'components/Modal'
import { createIssue } from 'api/queries'
import { addIssueToCache } from 'api/cache'
import { parseRepository } from 'api/parser'

const AddIssueModal = ({ open, onClose, data }) => (
  <Modal open={open} onClose={onClose}>
    <AddIssue data={data} onSubmit={onClose} />
  </Modal>
)

const AddIssue = ({ data, onSubmit }) => (
  <Mutation mutation={createIssue} update={addIssueToCache}>
    {createIssue => {
      const handleSubmit = ({ title }) => {
        const { id } = parseRepository(data)
        createIssue({ variables: { repositoryId: id, title: title } })
        onSubmit()
      }
      return <AddIssueForm onSubmit={handleSubmit} />
    }}
  </Mutation>
)

const AddIssueForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    onSubmit({ title })
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
