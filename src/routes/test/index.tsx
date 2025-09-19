import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div style="text-align: center; padding: 2rem;">
      <h1>Test Page</h1>
      <p>If you can see this, routing is working!</p>
      <a href="/">← Back to Home</a>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Test Page - Open House Update',
  meta: [
    {
      name: 'description',
      content: 'Test page to verify routing is working.',
    },
  ],
};
