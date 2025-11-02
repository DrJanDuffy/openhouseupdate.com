import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <section class="terms-of-service-page">
      <div class="container mx-auto px-6 py-16 max-w-4xl">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

        <div class="prose prose-lg max-w-none">
          <p class="text-gray-600 mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <div class="space-y-8">
            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p class="text-gray-600">
                By accessing and using Open House Update ("the Website"), you accept and agree to be
                bound by the terms and provision of this agreement. If you do not agree to abide by
                the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p class="text-gray-600 mb-4">
                Open House Update provides real estate services including but not limited to:
              </p>
              <ul class="list-disc pl-6 text-gray-600 space-y-2">
                <li>Property search and listing information</li>
                <li>Home valuation services</li>
                <li>Real estate consultation and guidance</li>
                <li>Market analysis and insights</li>
                <li>Buyer and seller representation services</li>
              </ul>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">3. Real Estate License</h2>
              <p class="text-gray-600 mb-4">
                Dr. Jan Duffy is an Open House Expert with Nevada License #S.0197614. All real
                estate services are provided in accordance with Nevada real estate laws and
                regulations.
              </p>
              <div class="bg-blue-50 rounded-lg p-4">
                <p class="text-blue-800">
                  <strong>License Information:</strong> Nevada Real Estate License #S.0197614
                </p>
              </div>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">4. User Responsibilities</h2>
              <p class="text-gray-600 mb-4">As a user of this website, you agree to:</p>
              <ul class="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide accurate and truthful information</li>
                <li>Use the website for lawful purposes only</li>
                <li>Respect the intellectual property rights of others</li>
                <li>Not engage in any fraudulent or deceptive practices</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">5. Property Information</h2>
              <p class="text-gray-600 mb-4">
                Property information provided on this website is obtained from various sources and
                is believed to be accurate but is not guaranteed. Users should:
              </p>
              <ul class="list-disc pl-6 text-gray-600 space-y-2">
                <li>Verify all property details independently</li>
                <li>Conduct their own due diligence</li>
                <li>Consult with qualified professionals</li>
                <li>Understand that market conditions change frequently</li>
              </ul>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p class="text-gray-600">
                Open House Update and Dr. Jan Duffy shall not be liable for any direct, indirect,
                incidental, special, or consequential damages resulting from the use or inability to
                use the website or services, including but not limited to damages for loss of
                profits, use, data, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">7. Professional Services</h2>
              <p class="text-gray-600 mb-4">
                Real estate services are provided on a professional basis. Clients should understand
                that:
              </p>
              <ul class="list-disc pl-6 text-gray-600 space-y-2">
                <li>All transactions are subject to market conditions</li>
                <li>Results cannot be guaranteed</li>
                <li>Professional fees may apply</li>
                <li>Written agreements govern all professional relationships</li>
              </ul>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
              <p class="text-gray-600">
                The content, organization, graphics, design, compilation, magnetic translation,
                digital conversion, and other matters related to the website are protected under
                applicable copyrights, trademarks, and other proprietary rights. The copying,
                redistribution, use, or publication of any such content is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">9. Privacy and Data Protection</h2>
              <p class="text-gray-600">
                Your privacy is important to us. Please review our Privacy Policy, which also
                governs your use of the website, to understand our practices regarding the
                collection and use of your information.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">10. Third-Party Services</h2>
              <p class="text-gray-600 mb-4">
                This website integrates with third-party services including RealScout for property
                listings. These services have their own terms and conditions, which users should
                review independently.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">11. Modifications</h2>
              <p class="text-gray-600">
                Open House Update reserves the right to modify these terms at any time. Changes will
                be posted on this page with an updated revision date. Continued use of the website
                after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
              <p class="text-gray-600">
                These terms shall be governed by and construed in accordance with the laws of the
                state of Nevada, without regard to its conflict of law provisions. Any disputes
                arising from these terms or the use of this website shall be resolved in the courts
                of Nevada.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
              <p class="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div class="bg-gray-50 rounded-lg p-6">
                <p class="text-gray-600 mb-2">
                  <strong>Dr. Jan Duffy</strong>
                </p>
                <p class="text-gray-600 mb-2">Open House Expert - Nevada License #S.0197614</p>
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
  title: 'Terms of Service - Open House Update',
  meta: [
    {
      name: 'description',
      content:
        'Terms of Service for Open House Update - Las Vegas real estate services. Review our terms and conditions for using our website and services.',
    },
    {
      name: 'robots',
      content: 'noindex, nofollow',
    },
  ],
}
