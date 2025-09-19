import { component$ } from '@builder.io/qwik';
import { routeLoader$, redirect } from '@builder.io/qwik-city';

export const useBuyerServicesLoader = routeLoader$(() => {
  throw redirect(302, '/services/buyer-services');
});

export default component$(() => {
  return (
    <div style="text-align: center; padding: 2rem;">
      <p>Redirecting to buyer services...</p>
    </div>
  );
});
