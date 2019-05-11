import React, { useState } from 'react'
import AddIssue from 'components/AddIssue'

const Header = ({ data }) => {
  const [addIssueOpened, setAddIssueOpened] = useState(false)

  const openAddIssue = () => {
    setAddIssueOpened(true)
  }
  const closeAddIssue = () => {
    setAddIssueOpened(false)
  }
  return (
    <div>
      <button onClick={openAddIssue}>Add Issue</button>
      <AddIssue onClose={closeAddIssue} open={addIssueOpened} data={data} />
    </div>
  )
}

export default Header
