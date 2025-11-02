import { component$ } from '@builder.io/qwik'

export interface RelatedLink {
  title: string
  url: string
  description?: string
}

export interface RelatedContentProps {
  title?: string
  links: RelatedLink[]
  className?: string
}

export default component$<RelatedContentProps>(
  ({ title = 'Related Content', links, className = '' }) => {
    if (!links || links.length === 0) return null

    return (
      <section class={`related-content mt-12 ${className}`}>
        <div class="container mx-auto px-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-500"
              >
                <h3 class="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600">
                  {link.title}
                </h3>
                {link.description && (
                  <p class="text-sm text-gray-600 line-clamp-2">{link.description}</p>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>
    )
  }
)

