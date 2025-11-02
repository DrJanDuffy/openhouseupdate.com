import { component$ } from '@builder.io/qwik'
import styles from './footer.module.css'

export default component$(() => {

  return (
    <footer class={styles.footer}>
      <div class={styles.container}>
        {/* Main Footer Content */}
        <div class={styles.footerContent}>
          {/* Company Info */}
          <div class={styles.footerSection}>
            <h3 class={styles.footerTitle}>Open House Update</h3>
            <p class={styles.footerDescription}>
              Professional real estate services in Las Vegas. Find your perfect home with expert
              guidance from Dr. Jan Duffy.
            </p>
            <div class={styles.contactInfo}>
              <p>
                <strong>Dr. Jan Duffy</strong>
              </p>
              <p>Open House Expert</p>
              <p>Las Vegas, Nevada</p>
            </div>
          </div>

          {/* Property Search */}
          <div class={styles.footerSection}>
            <h4 class={styles.footerSubtitle}>Property Search</h4>
            <ul class={styles.footerLinks}>
              <li>
                <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener noreferrer" class={styles.footerLink}>
                  Home Search
                </a>
              </li>
              <li>
                <a href="/search" class={styles.footerLink}>
                  Advanced Search
                </a>
              </li>
              <li>
                <a href="/map" class={styles.footerLink}>
                  Map Search
                </a>
              </li>
              <li>
                <a href="/this-weekend" class={styles.footerLink}>
                  This Weekend's Open Houses
                </a>
              </li>
            </ul>
          </div>

          {/* Price Ranges */}
          <div class={styles.footerSection}>
            <h4 class={styles.footerSubtitle}>Browse by Price</h4>
            <ul class={styles.footerLinks}>
              <li>
                <a href="/open-houses-for-sale/under-400k" class={styles.footerLink}>
                  Under $400K
                </a>
              </li>
              <li>
                <a href="/open-houses-for-sale/400k-600k" class={styles.footerLink}>
                  $400K - $600K
                </a>
              </li>
              <li>
                <a href="/open-houses-for-sale/600k-800k" class={styles.footerLink}>
                  $600K - $800K
                </a>
              </li>
              <li>
                <a href="/open-houses-for-sale/800k-1m" class={styles.footerLink}>
                  $800K - $1M
                </a>
              </li>
              <li>
                <a href="/open-houses-for-sale/over-1m" class={styles.footerLink}>
                  Over $1M
                </a>
              </li>
            </ul>
          </div>

          {/* Neighborhoods */}
          <div class={styles.footerSection}>
            <h4 class={styles.footerSubtitle}>Popular Neighborhoods</h4>
            <ul class={styles.footerLinks}>
              <li>
                <a href="/neighborhoods/summerlin" class={styles.footerLink}>
                  Summerlin
                </a>
              </li>
              <li>
                <a href="/neighborhoods/henderson" class={styles.footerLink}>
                  Henderson
                </a>
              </li>
              <li>
                <a href="/neighborhoods/north-las-vegas" class={styles.footerLink}>
                  North Las Vegas
                </a>
              </li>
              <li>
                <a href="/neighborhoods/spring-valley" class={styles.footerLink}>
                  Spring Valley
                </a>
              </li>
              <li>
                <a href="/neighborhoods/enterprise" class={styles.footerLink}>
                  Enterprise
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div class={styles.footerSection}>
            <h4 class={styles.footerSubtitle}>Services</h4>
            <ul class={styles.footerLinks}>
              <li>
                <a href="/about" class={styles.footerLink}>
                  About Dr. Duffy
                </a>
              </li>
              <li>
                <a href="/home-valuation" class={styles.footerLink}>
                  Home Valuation
                </a>
              </li>
              <li>
                <a href="/buyer-services" class={styles.footerLink}>
                  Buyer Services
                </a>
              </li>
              <li>
                <a href="/seller-services" class={styles.footerLink}>
                  Seller Services
                </a>
              </li>
              <li>
                <a href="/market-analysis" class={styles.footerLink}>
                  Market Analysis
                </a>
              </li>
              <li>
                <a href="/contact" class={styles.footerLink}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Search Section */}
        <div class={styles.footerSearch}>
          <h3 class={styles.footerSearchTitle}>Can't Find What You're Looking For?</h3>
          <p class={styles.footerSearchDescription}>
            Use our advanced search to filter by all criteria
          </p>

          <style>
            {`
              footer realscout-advanced-search {
                --rs-as-background-color: #1f2937;
                --rs-as-text-color: #ffffff;
                --rs-as-widget-width: 600px !important;
              }
            `}
          </style>

          <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw" />
        </div>

        {/* Footer Bottom */}
        <div class={styles.footerBottom}>
          <div class={styles.footerBottomContent}>
            <div class={styles.copyright}>
              <p>&copy; {new Date().getFullYear()} Open House Update. All rights reserved.</p>
              <p>Open House Expert Dr. Jan Duffy - Nevada License #S.0197614</p>
            </div>
            <div class={styles.footerBottomLinks}>
              <a href="/privacy-policy" class={styles.footerBottomLink}>
                Privacy Policy
              </a>
              <a href="/terms-of-service" class={styles.footerBottomLink}>
                Terms of Service
              </a>
              <a href="/sitemap" class={styles.footerBottomLink}>
                Sitemap
              </a>
            </div>
          </div>
          <div class={styles.builderCredit}>
            <a
              href="https://linktr.ee/drduffy"
              target="_blank"
              rel="noopener noreferrer"
              class={styles.builderLink}
            >
              <span class={styles.spacer}>|</span>
              <span>Made with ♥ By Dr. Jan Duffy</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
})
