import { ExternalLink } from 'lucide-react';

function ResourceCard({ title, provider, description, url, isFeatured }) {
  return (
    <div
      className="p-8 rounded-2xl border-2 transition-all hover:shadow-xl"
      style={{
        backgroundColor: isFeatured ? 'var(--bg-accent)' : 'var(--bg-secondary)',
        borderColor: isFeatured ? 'var(--border-accent)' : 'var(--border-default)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-accent)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = isFeatured ? 'var(--border-accent)' : 'var(--border-default)';
      }}
    >
      {isFeatured && (
        <div
          className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4"
          style={{
            backgroundColor: 'var(--primary)',
            color: 'white',
          }}
        >
          RECOMENDADO
        </div>
      )}

      <h4 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h4>

      {provider && (
        <p className="text-sm mb-3" style={{ color: 'var(--text-tertiary)' }}>
          {provider}
        </p>
      )}

      <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {description}
      </p>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold inline-flex items-center gap-1 transition-colors"
        style={{ color: 'var(--primary)' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.textDecoration = 'underline';
          e.currentTarget.style.color = 'var(--primary-hover)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.textDecoration = 'none';
          e.currentTarget.style.color = 'var(--primary)';
        }}
      >
        Acessar
        <ExternalLink size={16} />
      </a>
    </div>
  );
}

export default ResourceCard;
