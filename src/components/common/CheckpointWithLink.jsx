import { ExternalLink } from 'lucide-react';
import { resourceMetadata } from '../../data/roadmapData';

/**
 * Componente de Checkbox com Link para Recurso de Aprendizado
 *
 * ✅ ATUALIZADO: Dark Theme + Background azul (Opção B)
 *
 * @param {string} label - Texto do checkpoint
 * @param {Object|Array} resources - Recurso único (objeto) ou múltiplos recursos (array)
 */
function CheckpointWithLink({ label, resources }) {
  // Se receber um único recurso como objeto, transforma em array
  // Se for undefined/null, retorna array vazio
  const resourceArray = !resources ? [] : Array.isArray(resources) ? resources : [resources];

  return (
    <div className="checkpoint-group-wrapper mb-3">
      {/* Container com background + borda - OPÇÃO B com Dark Theme */}
      <div
        className="checkpoint-visual-group rounded-lg p-4 transition-all duration-200"
        style={{
          background: 'var(--checkpoint-bg)',
          borderLeft: '4px solid var(--checkpoint-border)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--checkpoint-bg-hover)';
          e.currentTarget.style.borderLeftColor = 'var(--checkpoint-border-hover)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'var(--checkpoint-bg)';
          e.currentTarget.style.borderLeftColor = 'var(--checkpoint-border)';
        }}
      >
        {/* Checkbox Principal */}
        <label className="flex items-start gap-3 cursor-pointer group/checkbox mb-3">
          <input type="checkbox" className="mt-1 w-6 h-6 text-green-600 rounded focus:ring-2 focus:ring-primary flex-shrink-0 cursor-pointer accent-green-600" />
          <span className="leading-relaxed font-medium flex-grow" style={{ color: 'var(--text-primary)' }}>
            {label}
          </span>
        </label>

        {/* Links para Recursos (pode ter múltiplos) */}
        <div className="ml-9 space-y-2">
          {resourceArray.map((resource, index) => {
            // Validação: se resource for undefined/null, pula
            if (!resource) return null;

            const typeMetadata = resourceMetadata.types[resource.resourceType] || resourceMetadata.types.article;
            const langMetadata = resourceMetadata.languages[resource.resourceLanguage] || resourceMetadata.languages['PT-BR'];

            return (
              <div key={index}>
                <a
                  href={resource.resourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm transition-colors group/link"
                  style={{ color: 'var(--primary)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--primary-hover)';
                    e.currentTarget.style.textDecoration = 'underline';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--primary)';
                    e.currentTarget.style.textDecoration = 'none';
                  }}
                >
                  {/* Ícone do tipo de recurso */}
                  <span className="text-base">{typeMetadata.icon}</span>

                  {/* Badge de idioma */}
                  <span
                    className="px-2 py-0.5 rounded-full text-xs font-semibold border"
                    style={{
                      backgroundColor: resource.resourceLanguage === 'PT-BR' ? 'var(--badge-ptbr-bg)' : 'var(--badge-en-bg)',
                      color: resource.resourceLanguage === 'PT-BR' ? 'var(--badge-ptbr-text)' : 'var(--badge-en-text)',
                      borderColor: resource.resourceLanguage === 'PT-BR' ? 'var(--badge-ptbr-border)' : 'var(--badge-en-border)',
                    }}
                  >
                    {langMetadata.flag} {resource.resourceLanguage}
                  </span>

                  {/* Título do recurso */}
                  <span className="font-medium">{resource.resourceTitle}</span>

                  {/* Ícone de link externo */}
                  <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                </a>

                {/* Indicador de tipo de recurso */}
                <span className="ml-7 text-xs" style={{ color: 'var(--text-tertiary)' }}>
                  {typeMetadata.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CheckpointWithLink;
