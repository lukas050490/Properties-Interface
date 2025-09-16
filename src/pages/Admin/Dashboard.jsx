import React, { useState, useEffect } from "react";
import PropertyForm from "../../components/PropertyForm";
import { api } from "../../services/api";
import AdminSidebar from "../../components/AdminSidebar";

function AdminDashboard() {
  const [properties, setProperties] = useState([]);
  const [editingProperty, setEditingProperty] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("authToken")


  useEffect(() => {
    async function fetchProperties() {
      setLoading(true);
      try {
        const res = await api.get("/manager/properties");
        setProperties(res.data.properties);
      } catch (err) {
        console.error("Erro ao carregar imóveis:", err);
        alert("Erro ao carregar imóveis");
      } finally {
        setLoading(false);
      }
    }
    fetchProperties();
  }, []);

  function handleEdit(property) {
    setEditingProperty(property);
    setIsFormOpen(true);
  }

  function handleCancel() {
    setIsFormOpen(false);
    setEditingProperty(null);
  }

  async function handleSubmit(formData, mainImage, gallery) {
    try {
      const formToSend = new FormData();
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
        },
      };

      Object.entries(formData).forEach(([key, value]) => {
        formToSend.append(key, value);
      });


      if (mainImage) {
        formToSend.append("main_image", mainImage);
      }

      let propertyId;

      if (editingProperty) {
        const res = await api.patch(`/manager/properties/${editingProperty.id}`, formToSend, config);
        propertyId = res.data.id;
      }

      // agora envia as imagens da galeria
      if (gallery.length > 0 && propertyId) {
        const galleryData = new FormData();
        gallery.forEach((file) => {
          galleryData.append("images", file);
        });

        await api.post(`/manager/properties/${propertyId}/images/many`, galleryData, config);
        console.log("Imagens da galeria enviadas com sucesso.");
      }

      alert("Imóvel salvo com sucesso!");
      handleCancel();
    } catch (err) {
      console.error(err);
      alert("Erro ao salvar imóvel.");
    }
  }

  return (
    <div className="p-6 bg-[#031716] min-h-screen text-[#6BA3BE] flex gap-1">
      <AdminSidebar />
      {!isFormOpen && (
        <>

          {loading ? (
            <p>Carregando imóveis...</p>
          ) : (
            <table className="w-full text-left border-collapse border border-gray-700">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="p-2">Nome</th>
                  <th className="p-2">Quartos</th>
                  <th className="p-2">Valor</th>
                  <th className="p-2">Ações</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(properties) && properties.map((property) => (
                  <tr
                    key={property.id}
                    className="border-b border-gray-700 hover:bg-[#032F30]"
                  >
                    <td className="p-2">{property.name}</td>
                    <td className="p-2">{property.numberOfRooms}</td>
                    <td className="p-2">
                      R$ {property.totalValue.toLocaleString()}
                    </td>
                    <td className="p-2">
                      <button
                        onClick={() => handleEdit(property)}
                        className="px-3 py-1 bg-[#0A7075] rounded hover:bg-[#0C969C]"
                      >
                        Editar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}

      {isFormOpen && (
        <PropertyForm
          initialData={editingProperty}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
}

export default AdminDashboard;
