import { component$, useVisibleTask$ } from '@builder.io/qwik'

interface RealScoutMapProps {
  geoType?: string
  geoId?: string
  height?: string
  width?: string
  onError$?: () => void
}

export default component$<RealScoutMapProps>(
  ({ geoType = 'city', geoId = '3240000', height = '500px', width = '100%', onError$ }) => {
    useVisibleTask$(() => {
      try {
        // Load RealScout map script if not already loaded
        if (!document.querySelector('script[src*="realscout.com"]')) {
          const script = document.createElement('script')
          script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js'
          script.type = 'module'
          script.onerror = () => {
            console.warn('RealScout script failed to load')
            if (onError$) {
              onError$()
            }
          }
          document.head.appendChild(script)
        }
      } catch (error) {
        console.warn('RealScout map initialization failed:', error)
        if (onError$) {
          onError$()
        }
      }
    })

    return (
      <div class="realscout-map-container">
        <style>{`
        .realscout-map-container {
          width: ${width};
          height: ${height};
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          background: #f8f9fa;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .map-placeholder {
          text-align: center;
          color: #666;
          padding: 2rem;
        }

        .map-placeholder h3 {
          margin-bottom: 1rem;
          color: #0A2540;
        }

        .map-placeholder p {
          margin-bottom: 1.5rem;
        }

        .map-link {
          display: inline-block;
          background: #3A8DDE;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          transition: background-color 0.2s;
        }

        .map-link:hover {
          background: #2a7bc7;
        }

        .realscout-iframe {
          width: 100%;
          height: 100%;
          border: none;
          border-radius: 12px;
        }

        .loading-spinner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 40px;
          height: 40px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #3A8DDE;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>

        <div class="map-placeholder">
          <h3>Interactive Property Map</h3>
          <p>
            View properties on an interactive map powered by RealScout. Click the link below to
            access the full map experience.
          </p>
          <a
            href={`https://drjanduffy.realscout.com/homesearch/map?geo_type=${geoType}&geo_id=${geoId}`}
            target="_blank"
            rel="noopener noreferrer"
            class="map-link"
          >
            Open Full Map View
          </a>
        </div>

        {/* Alternative: Embedded iframe approach */}
        {/* 
      <iframe
        src={`https://drjanduffy.realscout.com/homesearch/map?geo_type=${geoType}&geo_id=${geoId}`}
        className="realscout-iframe"
        title="RealScout Property Map"
        loading="lazy"
      />
      */}
      </div>
    )
  }
)
