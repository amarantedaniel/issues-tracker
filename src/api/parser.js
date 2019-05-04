const parseIssues = ({ repository }) =>
  repository.issues.edges.map(({ node }) => ({
    id: node.id,
    title: node.title,
    state: node.state,
  }))

export { parseIssues }
