import faunadb from 'faunadb'
import getId from './utils/getId'

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
})

exports.handler = (event, context, callback) => {
  const id = getId(event.path)
  console.log('Function `read-query-data` invoked')
  return client.query(q.Get(q.Match(q.Index("verb_by_operator"), id)))
  .then((response) => {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(response.data.description)
    })
  }).catch((error) => {
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify(error)
    })
  })
}

