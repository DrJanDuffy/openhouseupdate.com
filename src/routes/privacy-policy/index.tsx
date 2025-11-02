import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <section class="privacy-policy-page">
      <div class="container mx-auto px-6 py-16 max-w-4xl">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div class="prose prose-lg max-w-none">
          <p class="text-gray-600 mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <div class="space-y-8">
            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p class="text-gray-600 mb-4">
                We collect information you provide directly to us, such as when you:
              </p>
              <ul class="list-disc pl-6 text-gray-600 space-y-2">
                <li>Fill out contact forms or request home valuations</li>
                <li>Subscribe to our newsletter or updates</li>
                <li>Use our property search tools</li>
                <li>Contact us for real estate services</li>
              </ul>
              <p class="text-gray-600 mt-4">
                This may include your name, email address, phone number, property address, and other
                information you choose to provide.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p class="text-gray-600 mb-4">We use the information we collect to:</p>
              <ul class="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide real estate services and respond to your inquiries</li>
                <li>Send you property listings and market updates</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraud and unauthorized transactions</li>
              </ul>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
              <p class="text-gray-600 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third
                parties without your consent, except:
              </p>
              <ul class="list-disc pl-6 text-gray-600 space-y-2">
                <li>To trusted service providers who assist in operating our website</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">4. Cookies and Tracking</h2>
              <p class="text-gray-600 mb-4">
                We use cookies and similar technologies to enhance your experience on our website.
                This includes:
              </p>
              <ul class="list-disc pl-6 text-gray-600 space-y-2">
                <li>Google Analytics for website performance analysis</li>
                <li>RealScout widgets for property search functionality</li>
                <li>Session cookies for form functionality</li>
              </ul>
              <p class="text-gray-600 mt-4">
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p class="text-gray-600">
                We implement appropriate security measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no
                method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <p class="text-gray-600 mb-4">You have the right to:</p>
              <ul class="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of your data</li>
              </ul>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Services</h2>
              <p class="text-gray-600 mb-4">
                Our website integrates with third-party services including:
              </p>
              <ul class="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <strong>RealScout:</strong> Property search and listing services
                </li>
                <li>
                  <strong>Google Analytics:</strong> Website analytics and performance tracking
                </li>
                <li>
                  <strong>Vercel:</strong> Website hosting and deployment
                </li>
              </ul>
              <p class="text-gray-600 mt-4">
                These services have their own privacy policies, which we encourage you to review.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
              <p class="text-gray-600">
                Our services are not directed to children under 13. We do not knowingly collect
                personal information from children under 13. If we become aware that we have
                collected such information, we will take steps to delete it.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
              <p class="text-gray-600">
                We may update this Privacy Policy from time to time. We will notify you of any
                changes by posting the new Privacy Policy on this page and updating the "Last
                updated" date.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
              <p class="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div class="bg-gray-50 rounded-lg p-6">
                <p class="text-gray-600 mb-2">
                  <strong>Dr. Jan Duffy</strong>
                </p>
                <p class="text-gray-600 mb-2">Licensed Real Estate Agent</p>
                <p class="text-gray-600 mb-2">Email: DrDuffy@OpenHouseUpdate.com</p>
                <p class="text-gray-600">Phone: (702) 200-3422</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
})

export const head: DocumentHead = {
  title: 'Privacy Policy - Open House Update',
  meta: [
    {
      name: 'description',
      content:
        'Privacy Policy for Open House Update - Las Vegas real estate services. Learn how we collect, use, and protect your personal information.',
    },
    {
      name: 'robots',
      content: 'noindex, nofollow',
    },
  ],
}
