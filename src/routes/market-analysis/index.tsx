import { component$ } from '@builder.io/qwik';
import { routeLoader$, redirect } from '@builder.io/qwik-city';

export const useMarketAnalysisLoader = routeLoader$(() => {
  throw redirect(302, '/services/market-analysis');
});

export default component$(() => {
  return (
    <div style="text-align: center; padding: 2rem;">
      <p>Redirecting to market analysis...</p>
    </div>
  );
});
