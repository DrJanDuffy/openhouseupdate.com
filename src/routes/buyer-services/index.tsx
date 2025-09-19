import { component$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

export default component$(() => {
  const navigate = useNavigate();
  
  // Redirect to the correct services path
  navigate('/services/buyer-services');
  
  return (
    <div style="text-align: center; padding: 2rem;">
      <p>Redirecting to buyer services...</p>
    </div>
  );
});
