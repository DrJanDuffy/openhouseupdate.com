import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik'

export interface BuilderContentProps {
  // biome-ignore lint/suspicious/noExplicitAny: Builder.io content structure is dynamic
  content: any
  className?: string
}

/**
 * Renders Builder.io content using their content structure
 * This component renders Builder.io blocks as HTML
 */
export default component$<BuilderContentProps>(({ content, className = '' }) => {
  const htmlContent = useSignal<string>('')
  const isLoading = useSignal(true)

  useVisibleTask$(async () => {
    if (!(content && content.data)) {
      isLoading.value = false
      return
    }

    try {
      // Render Builder.io content to HTML
      const rendered = renderBuilderContent(content)
      htmlContent.value = rendered
      isLoading.value = false
    } catch (error) {
      console.error('Error rendering Builder.io content:', error)
      isLoading.value = false
    }
  })

  if (isLoading.value) {
    return (
      <div class={`builder-content loading ${className}`}>
        <div class="text-center py-8">
          <div class="animate-spin inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full" />
          <p class="mt-4 text-gray-600">Loading content...</p>
        </div>
      </div>
    )
  }

  if (!htmlContent.value) {
    return null
  }

  return (
    // biome-ignore lint/security/noDangerouslySetInnerHtml: Builder.io content is trusted and sanitized
    <div class={`builder-content ${className}`} dangerouslySetInnerHTML={htmlContent.value} />
  )
})

/**
 * Renders Builder.io content to HTML string
 */
// biome-ignore lint/suspicious/noExplicitAny: Builder.io content structure is dynamic
function renderBuilderContent(content: any): string {
  if (!(content && content.data)) {
    return ''
  }

  const blocks = content.data.blocks || []

  if (blocks.length === 0) {
    // If no blocks but HTML exists, return it
    return content.data.html || ''
  }

  // Render blocks to HTML
  return blocks
    .map((block: any, index: number) => {
      return renderBlockToHTML(block, index)
    })
    .join('')
}

// biome-ignore lint/suspicious/noExplicitAny: Builder.io block structure is dynamic
function renderBlockToHTML(block: any, _index: number): string {
  if (!block) return ''

  const componentName = block['@type'] || block.component?.name || 'div'
  const componentProps = block.component?.options || block.options || {}
  const children = block.children || []

  // Handle Builder.io's built-in components
  switch (componentName) {
    case 'Text':
      return `<div class="${componentProps.className || ''}">${componentProps.text || ''}${renderChildren(children)}</div>`

    case 'Heading': {
      const level = componentProps.level || 1
      return `<h${level} class="${componentProps.className || ''}">${componentProps.text || ''}</h${level}>`
    }

    case 'Image':
      return `<img src="${componentProps.image || componentProps.src || ''}" alt="${componentProps.alt || ''}" class="${componentProps.className || ''}" />`

    case 'Button':
      return `<a href="${componentProps.link || '#'}" class="inline-block ${componentProps.className || ''}">${componentProps.text || 'Button'}</a>`

    case 'Columns':
      return `<div class="grid ${componentProps.className || ''}">${renderChildren(children)}</div>`

    default:
      // Generic block - try to render HTML if available
      if (componentProps.html) {
        return componentProps.html
      }
      return `<div class="${componentProps.className || ''}">${renderChildren(children)}</div>`
  }
}

// biome-ignore lint/suspicious/noExplicitAny: Builder.io children structure is dynamic
function renderChildren(children: any[]): string {
  if (!(children && Array.isArray(children))) return ''
  return children.map((child, index) => renderBlockToHTML(child, index)).join('')
}
