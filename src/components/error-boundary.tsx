import { $, component$, useSignal } from '@builder.io/qwik'

interface ErrorBoundaryProps {
  fallback?: any
  children: any
}

export default component$<ErrorBoundaryProps>(({ fallback, children }) => {
  const hasError = useSignal(false)
  const error = useSignal<Error | null>(null)
  const retryCount = useSignal(0)

  const resetError = $(() => {
    hasError.value = false
    error.value = null
    retryCount.value = 0
  })

  const retry = $(() => {
    retryCount.value++
    if (retryCount.value < 3) {
      resetError()
    }
  })

  // In a real implementation, you would catch errors here
  // For now, this is a placeholder for the error boundary pattern

  if (hasError.value) {
    if (fallback) {
      return fallback
    }

    return (
      <div class="error-boundary">
        <style>{`
          .error-boundary {
            padding: 2rem;
            margin: 2rem 0;
            background: #fef2f2;
            border: 1px solid #fecaca;
            border-radius: 8px;
            text-align: center;
          }
          
          .error-boundary h3 {
            color: #dc2626;
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
          }
          
          .error-boundary p {
            color: #7f1d1d;
            margin-bottom: 1.5rem;
          }
          
          .error-actions {
            display: flex;
            gap: 1rem;
            justify-content: center;
          }
          
          .btn-retry {
            background: #dc2626;
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            transition: background-color 0.2s;
          }
          
          .btn-retry:hover {
            background: #b91c1c;
          }
          
          .btn-retry:disabled {
            background: #94a3b8;
            cursor: not-allowed;
          }
          
          .btn-reset {
            background: #6b7280;
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            transition: background-color 0.2s;
          }
          
          .btn-reset:hover {
            background: #4b5563;
          }
        `}</style>

        <h3>Something went wrong</h3>
        <p>
          We're sorry, but something unexpected happened.
          {retryCount.value < 3
            ? ' You can try again or contact us for assistance.'
            : ' Please contact us for assistance.'}
        </p>

        {error.value && (
          <details style="margin: 1rem 0; text-align: left;">
            <summary style="cursor: pointer; color: #dc2626; font-weight: 600;">
              Technical Details
            </summary>
            <pre style="margin-top: 0.5rem; padding: 1rem; background: #f9fafb; border-radius: 4px; font-size: 0.875rem; overflow-x: auto;">
              {error.value.message}
            </pre>
          </details>
        )}

        <div class="error-actions">
          {retryCount.value < 3 && (
            <button class="btn-retry" onClick$={retry}>
              Try Again ({3 - retryCount.value} attempts left)
            </button>
          )}
          <button class="btn-reset" onClick$={resetError}>
            Reset
          </button>
        </div>
      </div>
    )
  }

  return children
})
