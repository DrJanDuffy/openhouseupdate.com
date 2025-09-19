import { component$ } from '@builder.io/qwik'

interface GoogleAnalyticsProps {
  measurementId: string
}

export default component$<GoogleAnalyticsProps>(({ measurementId }) => {
  // Create a script element and append it to the document head
  if (typeof document !== 'undefined') {
    // Check if the script is already loaded
    const existingScript = document.querySelector(`script[src*="${measurementId}"]`)
    if (existingScript) return null

    // Create the Google Analytics script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    script.crossOrigin = 'anonymous'
    script.integrity = 'sha384-...' // Add proper integrity hash if needed

    // Create the gtag configuration script
    const configScript = document.createElement('script')
    configScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}', {
        page_title: document.title,
        page_location: window.location.href,
      });
    `

    // Append scripts to document head
    document.head.appendChild(script)
    document.head.appendChild(configScript)
  }

  return null // This component doesn't render anything
})
