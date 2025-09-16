import { useEffect, useState } from "react";
import { api } from "../../services/api";
import AdminSidebar from "../../components/AdminSidebar";
import PropertyForm from "../../components/PropertyForm";

function ManageProperties() {
  const [properties, setProperties] = useState([]);
  const [editingProperty, setEditingProperty] = useState(null);
  const [creatingProperty, setCreatingProperty] = useState(false);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("authToken")




  async function fetchProperties() {
    setLoading(true);
    try {
      const response = await api.get("/manager/properties");
      setProperties(response.data.properties);
    } catch (error) {
      console.error("Erro ao buscar imóveis:", error);
      alert("Erro ao buscar imóveis.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProperties();
  }, []);

  async function handleDelete(id) {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`,
      },
    };
    if (!window.confirm("Tem certeza que deseja excluir este imóvel?")) return;
    try {
      await api.delete(`/manager/properties/${id}`, config);
      fetchProperties();
    } catch {
      alert("Erro ao excluir imóvel.");
    }
  }

  function handleEdit(property) {
    setEditingProperty(property);
    setCreatingProperty(false);
  }

  function handleCreate() {
    setCreatingProperty(true);
    setEditingProperty(null);
  }

  function handleCancel() {
    setEditingProperty(null);
    setCreatingProperty(false);
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

      // adiciona todos os campos do form
      Object.entries(formData).forEach(([key, value]) => {
        formToSend.append(key, value);
      });

      // imagem principal
      if (mainImage) {
        formToSend.append("main_image", mainImage);
      }

      let propertyId;

      if (editingProperty) {
        const res = await api.patch(`/manager/properties/${editingProperty.id}`, formToSend, config);
        propertyId = res.data.id;
      } else if (creatingProperty) {
        const res = await api.post("/manager/properties", formToSend, config);
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
      fetchProperties();
      handleCancel();
    } catch (err) {
      console.error(err);
      alert("Erro ao salvar imóvel.");
    }
  }


  return (
    <div className="flex min-h-screen bg-[#031716] text-[#6BA3BE]">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6 text-[#0C969C]">
          Gerenciar Imóveis
        </h1>

        <button
          onClick={handleCreate}
          className="mb-6 px-4 py-2 bg-[#0A7075] rounded hover:bg-[#0C969C] transition-colors"
        >
          + Novo Imóvel
        </button>

        {(editingProperty || creatingProperty) ? (
          <PropertyForm
            initialData={editingProperty ?? undefined}
            onCancel={handleCancel}
            onSubmit={handleSubmit}
          />
        ) : loading ? (
          <p>Carregando imóveis...</p>
        ) : (
          <table className="w-full border border-[#274D60] rounded text-left">
            <thead className="bg-[#032F30]">
              <tr>
                <th className="p-3">Nome</th>
                <th className="p-3">Valor Total</th>
                <th className="p-3">Quartos</th>
                <th className="p-3">Tamanho (m²)</th>
                <th className="p-3">Ativo</th>
                <th className="p-3">Ações</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(properties) && properties.map((property) => (
                <tr
                  key={property.id}
                  className="border-t border-[#274D60] hover:bg-[#0A7075]"
                >
                  <td className="p-3">{property.name}</td>
                  <td className="p-3">R$ {property.totalValue.toLocaleString()}</td>
                  <td className="p-3">{property.numberOfRooms}</td>
                  <td className="p-3">{property.size}</td>
                  <td className="p-3">{property.isActive ? "Sim" : "Não"}</td>
                  <td className="p-3 space-x-2">
                    <button
                      onClick={() => handleEdit(property)}
                      className="px-2 py-1 bg-[#0C969C] rounded hover:bg-[#6BA3BE] transition-colors"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(property.id)}
                      className="px-2 py-1 bg-red-600 rounded hover:bg-red-700 transition-colors"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    </div>
  );
}

export default ManageProperties;
