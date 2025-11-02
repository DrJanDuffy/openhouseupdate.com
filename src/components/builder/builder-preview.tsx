import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik'

/**
 * Builder.io Preview Mode Component
 * Loads Builder.io's visual editor script when in preview mode
 */
export default component$(() => {
  const isPreviewMode = useSignal(false)

  useVisibleTask$(() => {
    if (typeof window === 'undefined') return

    // Check if we're in Builder.io preview mode
    const url = new URL(window.location.href)
    const builderPreview = url.searchParams.get('builder.preview')
    const previewMode = url.searchParams.has('preview')

    isPreviewMode.value = builderPreview === 'true' || previewMode

    if (isPreviewMode.value) {
      // Load Builder.io's visual editor script
      loadBuilderPreview()
    }
  })

  if (!isPreviewMode.value) {
    return null
  }

  return (
    <div id="builder-preview-wrapper">{/* Builder.io preview script will be injected here */}</div>
  )
})

function loadBuilderPreview() {
  if (typeof window === 'undefined') return

  // Check if Builder.io preview script is already loaded
  if (document.querySelector('script[src*="builder.io/preview"]')) {
    return
  }

  // Load Builder.io preview script
  const script = document.createElement('script')
  script.src = 'https://cdn.builder.io/js/preview'
  script.async = true
  script.defer = true
  document.head.appendChild(script)
}
