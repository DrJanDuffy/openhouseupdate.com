import { component$ } from '@builder.io/qwik'
import styles from './header.module.css'

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={['container', styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="Open House Update - Las Vegas Real Estate">
            <div class={styles.logoContainer}>
              <div class={styles.logoText}>Open House Update</div>
              <div class={styles.logoPhone}>
                <a href="tel:+17022003422" class={styles.phoneLink} title="Call Dr. Janet Duffy">
                  (702) 200-3422
                </a>
              </div>
            </div>
          </a>
        </div>
        <ul>
          <li>
            <a href="/search" class={styles.navLink}>
              Search Properties
            </a>
          </li>
          <li>
            <a href="/this-weekend" class={styles.navLink}>
              Open Houses
            </a>
          </li>
          <li>
            <a href="/contact" class={styles.navLink}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
})
