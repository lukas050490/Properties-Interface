import PropertyCard from "./PropertyCard";

function PropertyList({ properties }) {

  if (!Array.isArray(properties) || properties.length === 0) {
    return <p className="text-secondaryLight">Nenhum imóvel encontrado.</p>;
  }

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}

export default PropertyList;
