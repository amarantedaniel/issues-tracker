import map from 'lodash/fp/map'
import groupBy from 'lodash/fp/groupBy'
import flow from 'lodash/fp/flow'

const parseIssues = ({ repository }) =>
  flow(
    map(({ node }) => ({
      id: node.id,
      title: node.title,
      state: node.state,
    })),
    groupBy('state'),
  )(repository.issues.edges)

const parseRepository = ({ repository }) => repository

export { parseIssues, parseRepository }
