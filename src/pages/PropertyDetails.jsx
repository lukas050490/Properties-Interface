import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import VisitForm from "../components/VisitForm";
import Header from "../components/Header";

function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showVisitForm, setShowVisitForm] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const [propertyImages, setPropertyImages] = useState([]);

  useEffect(() => {
    async function fetchProperty() {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:4000/manager/properties/${id}`);
        console.log(res.data)
        setProperty(res.data);


        const imagesRes = await axios.get(`http://localhost:4000/manager/properties/${id}/images/many`);

        console.log("resposta das imagens:", imagesRes.data);


        const galleryImages = imagesRes.data.map(img =>
          img.imageUrl.startsWith("http")
            ? img.imageUrl
            : `http://localhost:4000${img.imageUrl}`
        );

        let allImages = [...galleryImages];

        console.log("All images to display:", allImages);
        setPropertyImages(allImages);
      } catch {
        alert("Erro ao carregar imóvel.");
      } finally {
        setLoading(false);
      }
    }
    fetchProperty();
  }, [id]);

  const toggleVisitForm = () => {
    setShowVisitForm(prev => !prev);
  };


  const handleVisitSuccess = () => {
    setShowVisitForm(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === propertyImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? propertyImages.length - 1 : prevIndex - 1
    );
  };

  if (loading) return <p className="p-6 text-center">Carregando imóvel...</p>;
  if (!property) return <p className="p-6 text-center">Imóvel não encontrado.</p>;

  return (
    <div className="min-h-screen bg-[#031716]">
      <Header />
      <div className="min-h-screen bg-[#031716] text-[#6BA3BE] p-6 max-w-5xl mx-auto">
        {/* Image Carousel */}
        <div className="relative mb-8 rounded-lg overflow-hidden">
          <div className="h-96 bg-gray-800 flex items-center justify-center">
            <img
              src={propertyImages[currentImageIndex]}
              alt={property.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Navigation buttons */}
          {propertyImages.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                &lt;
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                &gt;
              </button>
            </>
          )}

          {/* Image indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {propertyImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-[#0C969C]' : 'bg-white/50'
                  }`}
              />
            ))}
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-4 text-[#0C969C]">{property.name}</h1>
        <p className="mb-6 text-lg">{property.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#052423] p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-[#0C969C]">Informações Básicas</h2>
            <div className="space-y-3">
              <p><span className="font-medium">Endereço:</span> {property.address}</p>
              <p><span className="font-medium">Tipo:</span> {property.type === 'HOUSE' ? 'Casa' : 'Apartamento'}</p>
              <p><span className="font-medium">Área:</span> {property.size} m²</p>
              <p><span className="font-medium">Quartos:</span> {property.numberOfRooms}</p>
              <p><span className="font-medium">Banheiros:</span> {property.numberOfBathrooms}</p>
              <p><span className="font-medium">Vagas na garagem:</span> {property.garageSlots}</p>
              <p><span className="font-medium">Mobiliado:</span> {property.isFurnished ? 'Sim' : 'Não'}</p>
            </div>
          </div>

          <div className="bg-[#052423] p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-[#0C969C]">Valores</h2>
            <div className="space-y-3">
              {property.isSale && (
                <p><span className="font-medium">Valor de venda:</span> R$ {property.totalValue?.toLocaleString('pt-BR')}</p>
              )}
              {property.isRent && (
                <p><span className="font-medium">Valor de aluguel:</span> R$ {property.rentValue?.toLocaleString('pt-BR')}</p>
              )}
              <p><span className="font-medium">Condomínio:</span> R$ {property.condoValue?.toLocaleString('pt-BR')}</p>
              <p><span className="font-medium">IPTU:</span> R$ {property.taxValue?.toLocaleString('pt-BR')}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#052423] p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-[#0C969C]">Características</h2>
            <div className="space-y-2">
              <p><span className="font-medium">Aceita pets:</span> {property.areaPetsAllowed ? 'Sim' : 'Não'}</p>
              <p><span className="font-medium">Próximo ao metrô:</span> {property.isNextToSubway ? 'Sim' : 'Não'}</p>
              <p><span className="font-medium">Status:</span> {property.isActive ? 'Ativo' : 'Inativo'}</p>
              <p><span className="font-medium">Data de criação:</span> {new Date(property.createdAt).toLocaleDateString('pt-BR')}</p>
            </div>
          </div>

          <div className="bg-[#052423] p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-[#0C969C]">Localização</h2>
            <div className="space-y-2">
              <p><span className="font-medium">Latitude:</span> {property.latitude}</p>
              <p><span className="font-medium">Longitude:</span> {property.longitude}</p>
              {/* In a real app, you would integrate a map here */}
              <div className="h-40 bg-gray-800 rounded flex items-center justify-center mt-2">
                <p className="text-gray-400">Mapa de localização</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={toggleVisitForm}
            className="px-8 py-3 bg-[#0A7075] rounded-lg hover:bg-[#0C969C] transition-colors font-medium text-lg"
          >
            {showVisitForm ? "Voltar" : "Agendar Visita"}
          </button>
        </div>

        {showVisitForm && (
          <VisitForm
            propertyId={property.id}
            onSuccess={handleVisitSuccess}
            onClose={toggleVisitForm}
          />
        )}
      </div>
    </div>
  );
}

export default PropertyDetails;
