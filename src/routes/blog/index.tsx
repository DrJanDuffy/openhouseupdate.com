import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { blogPosts } from '~/data/blog-posts'
import RelatedContent from '~/components/seo/related-content'
import EnhancedPageSEO, { createOptimizedHead } from '~/components/seo/enhanced-page-seo'

export default component$(() => {

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <section class="blog-page">
      <div class="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Las Vegas <span class="text-blue-600">Real Estate Blog</span>
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest market insights, neighborhood updates, and expert advice
            from Dr. Jan Duffy.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div class="mb-16">
            <h2 class="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <div class="md:flex">
                <div class="md:w-1/2 bg-gradient-to-br from-blue-600 to-green-600 p-8 text-white flex items-center justify-center">
                  <div class="text-center">
                    <div class="text-6xl mb-4">📈</div>
                    <div class="text-sm opacity-90">{featuredPost.category}</div>
                  </div>
                </div>
                <div class="md:w-1/2 p-8">
                  <div class="flex items-center space-x-4 mb-4">
                    <span class="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <span class="text-gray-500 text-sm">{featuredPost.readTime}</span>
                  </div>
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                  <p class="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div class="flex items-center justify-between">
                    <span class="text-gray-500 text-sm">{featuredPost.date}</span>
                    <a
                      href={`/blog/${featuredPost.slug}`}
                      class="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div class="mb-16">
          <h2 class="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div class="bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center">
                  <div class="text-center">
                    <div class="text-4xl mb-2">
                      {post.category === 'Buyer Tips'
                        ? '🏠'
                        : post.category === 'Seller Tips'
                          ? '💰'
                          : post.category === 'Neighborhoods'
                            ? '🏘️'
                            : post.category === 'Investment'
                              ? '📊'
                              : '📝'}
                    </div>
                    <div class="text-sm text-gray-600">{post.category}</div>
                  </div>
                </div>
                <div class="p-6">
                  <div class="flex items-center space-x-4 mb-4">
                    <span class="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span class="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 class="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                  <p class="text-gray-600 mb-4">{post.excerpt}</p>
                  <div class="flex items-center justify-between">
                    <span class="text-gray-500 text-sm">{post.date}</span>
                    <a
                      href={`/blog/${post.slug}`}
                      class="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div class="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 class="text-3xl font-bold mb-4">Stay Updated</h2>
          <p class="text-xl mb-8 opacity-90">
            Get the latest Las Vegas real estate insights delivered to your inbox.
          </p>
          <div class="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              class="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <button
              type="button"
              class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </div>
          <p class="text-sm opacity-75 mt-4">No spam. Unsubscribe at any time.</p>
        </div>

        {/* Categories */}
        <div class="mt-16">
          <h2 class="text-2xl font-bold text-gray-900 mb-8">Browse by Category</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Market Updates', 'Buyer Tips', 'Seller Tips', 'Neighborhoods', 'Investment'].map(
              (category) => (
                <div
                  key={category}
                  class="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow cursor-pointer"
                >
                  <div class="text-4xl mb-4">
                    {category === 'Market Updates'
                      ? '📈'
                      : category === 'Buyer Tips'
                        ? '🏠'
                        : category === 'Seller Tips'
                          ? '💰'
                          : category === 'Neighborhoods'
                            ? '🏘️'
                            : category === 'Investment'
                              ? '📊'
                              : '📝'}
                  </div>
                  <h3 class="text-lg font-semibold text-gray-900">{category}</h3>
                  <p class="text-gray-600 text-sm mt-2">
                    {category === 'Market Updates'
                      ? 'Current market trends and analysis'
                      : category === 'Buyer Tips'
                        ? 'Expert advice for homebuyers'
                        : category === 'Seller Tips'
                          ? 'Strategies for successful selling'
                          : category === 'Neighborhoods'
                            ? 'Local area insights and guides'
                            : 'Investment opportunities and analysis'}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Related Content */}
        <RelatedContent
          title="Explore Our Services"
          links={[
            {
              title: 'Home Valuation',
              url: '/services/home-valuation',
              description: 'Get a free, accurate home valuation for your Las Vegas property',
            },
            {
              title: 'Buyer Services',
              url: '/services/buyer-services',
              description: 'Expert guidance for buying your dream home in Las Vegas',
            },
            {
              title: 'Seller Services',
              url: '/services/seller-services',
              description: 'Professional marketing and selling services to maximize your home value',
            },
            {
              title: 'Market Analysis',
              url: '/services/market-analysis',
              description: 'Comprehensive market reports and neighborhood insights',
            },
            {
              title: 'This Weekend Open Houses',
              url: '/this-weekend',
              description: 'Find open houses happening this weekend in Las Vegas',
            },
            {
              title: 'People Also Ask',
              url: '/people-also-ask',
              description: 'Get answers to common Las Vegas real estate questions',
            },
          ]}
          className="mt-12"
        />
      </div>
    </section>
  )
})

export const head: DocumentHead = createOptimizedHead('blog')
