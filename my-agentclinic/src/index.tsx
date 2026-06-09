import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { Layout } from './layout'
import { HomePage } from './pages/home'

const app = new Hono()

app.get('/', (c) => {
  return c.html(
    <Layout>
      <HomePage />
    </Layout>
  )
})

const port = Number(process.env.PORT) || 3000
serve({ fetch: app.fetch, port }, () => {
  console.log(`AgentClinic running at http://localhost:${port}`)
})

export default app
