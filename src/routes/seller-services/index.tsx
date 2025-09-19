import { component$ } from '@builder.io/qwik';
import { routeLoader$, redirect } from '@builder.io/qwik-city';

export const useSellerServicesLoader = routeLoader$(() => {
  throw redirect(302, '/services/seller-services');
});

export default component$(() => {
  return (
    <div style="text-align: center; padding: 2rem;">
      <p>Redirecting to seller services...</p>
    </div>
  );
});
