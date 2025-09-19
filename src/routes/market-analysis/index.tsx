import { component$ } from '@builder.io/qwik'
import type { RequestHandler } from '@builder.io/qwik-city'

export const onGet: RequestHandler = async ({ redirect }) => {
  throw redirect(302, '/services/market-analysis')
}

export default component$(() => {
  return (
    <div style="text-align: center; padding: 2rem;">
      <p>Redirecting to market analysis...</p>
    </div>
  )
})
