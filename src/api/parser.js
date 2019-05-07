import _ from 'lodash'

const parseIssues = ({ repository }) =>
  _.chain(repository.issues.edges)
    .map(({ node }) => ({
      id: node.id,
      title: node.title,
      state: node.state,
    }))
    .groupBy('state')
    .value()

export { parseIssues }
