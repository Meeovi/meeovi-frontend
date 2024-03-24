const fastify = require('fastify')()
const { Client } = require('@elastic/elasticsearch')

fastify.register(require('@fastify/elasticsearch'), {
  client: new Client({ node: process.env.ELASTICSEARCH_URL })
})

fastify.get('/user', async function (req, reply) {
  const { body } = await this.elastic.search({
    index: 'tweets',
    body: {
      query: { match: { text: req.query.q }}
    }
  })

  return body.hits.hits
})

fastify.listen({ port: 3000 }, err => {
  if (err) throw err
})