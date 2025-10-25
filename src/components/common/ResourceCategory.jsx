import ResourceCard from './ResourceCard';

function ResourceCategory({ title, icon, resources }) {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-6 text-gray-900 pb-2 border-b-2 border-blue-600">
        {icon} {title}
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <ResourceCard key={index} {...resource} />
        ))}
      </div>
    </div>
  );
}

export default ResourceCategory;
