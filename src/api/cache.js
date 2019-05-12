import { fetchIssues } from 'api/queries'
import * as R from 'ramda'

const addIssueToCache = (cache, data) => {
  const readLens = R.lensPath(['data', 'createIssue', 'issue'])
  const writeLens = R.lensPath(['repository', 'issues', 'edges'])
  const issue = R.view(readLens, data)
  const currentCache = cache.readQuery({ query: fetchIssues })
  const appendIssue = list =>
    R.append({ node: issue, __typename: 'IssueEdge' }, list)
  const newCache = R.over(writeLens, appendIssue, currentCache)
  cache.writeQuery({ query: fetchIssues, data: newCache })
}

export { addIssueToCache }
