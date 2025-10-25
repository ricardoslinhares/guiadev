function Card({ icon, title, description }) {
  return (
    <div
      className="p-8 md:p-10 rounded-2xl border-2 transition-all duration-300 transform hover:-translate-y-2 min-h-[280px] flex flex-col card"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--border-default)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-accent)';
        e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-default)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div className="text-6xl mb-6">{icon}</div>
      <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h3>
      <p className="text-lg leading-relaxed flex-grow" style={{ color: 'var(--text-secondary)' }}>
        {description}
      </p>
    </div>
  );
}

export default Card;
