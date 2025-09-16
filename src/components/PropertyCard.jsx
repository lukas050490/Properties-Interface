import { NavLink } from 'react-router-dom';
import { Bed, Bath, Car } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function PropertyCard({ property }) {

  return (
    <motion.div
      className="bg-primaryDark2 rounded-lg shadow-lg p-4 max-w-sm cursor-pointer hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      layout
    >
      <div className="h-48 w-full bg-white rounded-md mb-4 overflow-hidden">
        <img
          src={
            property.mainImageUrl
              ? property.mainImageUrl.startsWith("http")
                ? property.mainImageUrl
                : `http://localhost:4000${property.mainImageUrl}`
              : "https://via.placeholder.com/400x200"
          }

          alt={property.name || "Imóvel"}
          className="object-cover w-full h-full"
        />
      </div>

      <h2 className="text-secondaryLight text-xl font-semibold mb-2">
        {property.name || "Sem nome"}
      </h2>

      <p className="text-primaryLight mb-1">
        {property.isSale && "Venda"}
        {property.isSale && property.isRent && " | "}
        {property.isRent && "Aluguel"}
      </p>


      {<p className="text-primaryLight font-bold mb-2">
        {property.totalValue
          ? `R$ ${property.totalValue.toLocaleString()}`
          : ""}
      </p>}
      {<p className="text-primaryLight font-bold mb-2">
        {property.rentValue
          ? `R$ ${property.rentValue.toLocaleString()}/mês`
          : ""}
      </p>}

      <div className="flex justify-between text-primaryLight text-sm">
        <span className="flex items-center gap-1">
          {/* Ícone de cama */}
          <Bed className="w-6 h-6 text-blue-500" />
          {property.numberOfRooms ?? 0} quartos
        </span>
        <span className="flex items-center gap-1">
          {/* Ícone de chuveiro */}
          <Bath className="w-6 h-6 text-green-500" />
          {property.numberOfBathrooms ?? 0} banheiros
        </span>
        <span className="flex items-center gap-1">
          {/* Ícone de carro */}
          <Car className="w-6 h-6 text-red-500" />
          {property.garageSlots ?? 0} vagas
        </span>
      </div>
      <NavLink
        to={`/property/${property.id}`}
        className={({ isActive }) =>
          `block px-4 py-2 text-white rounded hover:bg-primaryMid transition-colors ${isActive ? "bg-primaryMid" : ""}`
        }
      >
        Detalhes
      </NavLink>
    </motion.div>
  );
}

export default PropertyCard;
