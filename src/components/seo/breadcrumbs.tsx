import { component$ } from '@builder.io/qwik'
import EnhancedStructuredData from './enhanced-structured-data'

export interface BreadcrumbItem {
  name: string
  url: string
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export default component$<BreadcrumbsProps>(({ items, className = '' }) => {
  if (items.length === 0) return null

  return (
    <>
      {/* Structured Data */}
      <EnhancedStructuredData type="BreadcrumbList" breadcrumbs={items} />

      {/* Visual Breadcrumbs */}
      <nav class={`breadcrumbs ${className}`} aria-label="Breadcrumb navigation">
        <ol class="flex items-center space-x-2 text-sm text-gray-600">
          {items.map((item, index) => (
            <li key={index} class="flex items-center">
              {index > 0 && (
                <svg
                  class="w-4 h-4 mx-2 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {index === items.length - 1 ? (
                <span class="text-gray-900 font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <a href={item.url} class="text-blue-600 hover:text-blue-800 transition-colors">
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
})
