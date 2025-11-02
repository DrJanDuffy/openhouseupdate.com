import { component$ } from '@builder.io/qwik'

export interface RelatedLink {
  title: string
  url: string
  description?: string
}

export interface InternalLinkingProps {
  title?: string
  links: RelatedLink[]
  className?: string
}

export default component$<InternalLinkingProps>(({ title = 'Related Content', links, className = '' }) => {
  if (links.length === 0) return null

  return (
    <div class={`related-content ${className}`}>
      <style>{`
        .related-content {
          background: #F7F9FC;
          border-radius: 12px;
          padding: 2rem;
          margin: 2rem 0;
        }
        
        .related-content h3 {
          color: #0A2540;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          border-bottom: 2px solid #3A8DDE;
          padding-bottom: 0.5rem;
        }
        
        .related-links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }
        
        .related-link {
          background: white;
          border-radius: 8px;
          padding: 1.25rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          text-decoration: none;
          display: block;
          border-left: 4px solid #3A8DDE;
        }
        
        .related-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          border-left-color: #2a7bc7;
        }
        
        .related-link-title {
          color: #0A2540;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          display: block;
        }
        
        .related-link-description {
          color: #666;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        
        @media (max-width: 768px) {
          .related-links {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      
      <h3>{title}</h3>
      <div class="related-links">
        {links.map((link) => (
          <a key={link.url} href={link.url} class="related-link">
            <span class="related-link-title">{link.title}</span>
            {link.description && <p class="related-link-description">{link.description}</p>}
          </a>
        ))}
      </div>
    </div>
  )
})

