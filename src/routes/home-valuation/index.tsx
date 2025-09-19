import { component$ } from '@builder.io/qwik';
import { routeLoader$, redirect } from '@builder.io/qwik-city';

export const useHomeValuationLoader = routeLoader$(() => {
  throw redirect(302, '/services/home-valuation');
});

export default component$(() => {
  return (
    <div style="text-align: center; padding: 2rem;">
      <p>Redirecting to home valuation...</p>
    </div>
  );
});
