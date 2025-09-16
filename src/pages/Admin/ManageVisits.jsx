import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import AdminSidebar from "../../components/AdminSidebar";

function ManageVisits() {
  const [visits, setVisits] = useState([]);
  const [loading, setLoading] = useState(false);

  const getStatusText = (status) => {
    const statusMap = {
      INTERESTED: "Interessado",
      CONFIRMED: "Confirmado",
      ACCOMPLISHED: "Realizado",
      CANCELED: "Cancelado"
    };
    return statusMap[status] || status;
  };

  const getStatusColor = (status) => {
    const colorMap = {
      INTERESTED: "bg-yellow-500",
      CONFIRMED: "bg-blue-500",
      ACCOMPLISHED: "bg-green-500",
      CANCELED: "bg-red-500"
    };
    return colorMap[status] || "bg-gray-500";
  };

  async function fetchVisits() {
    setLoading(true);
    try {
      const response = await api.get("/manager/visits");
      setVisits(response.data);
    } catch (error) {
      console.error("Erro ao buscar visitas:", error);
      alert("Erro ao buscar visitas.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchVisits();
  }, []);

  async function handleUpdateStatus(id, status) {
    try {
      await api.patch(`/manager/visits/${id}`, { status });
      alert("Status atualizado com sucesso!");
      fetchVisits();
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
      alert("Erro ao atualizar status.");
    }
  }

  async function handleDeleteVisit(id) {
    if (!window.confirm("Tem certeza que deseja excluir esta visita?")) {
      return;
    }

    try {
      await api.delete(`/manager/visits/${id}`);
      alert("Visita excluída com sucesso!");
      fetchVisits();
    } catch (error) {
      console.error("Erro ao excluir visita:", error);
      alert("Erro ao excluir visita.");
    }
  }

  return (
    <div className="flex min-h-screen bg-[#031716] text-[#6BA3BE]">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6 text-[#0C969C]">
          Gerenciar Visitas
        </h1>

        {loading ? (
          <p className="text-center">Carregando visitas...</p>
        ) : visits.length === 0 ? (
          <p className="text-center">Nenhuma visita encontrada.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border border-[#274D60] rounded text-left">
              <thead className="bg-[#032F30]">
                <tr>
                  <th className="p-3">Nome</th>
                  <th className="p-3">Telefone</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Data da Visita</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Ações</th>
                </tr>
              </thead>
              <tbody>
                {visits.map((visit) => (
                  <tr
                    key={visit.id}
                    className="border-t border-[#274D60] hover:bg-[#052423] transition-colors"
                  >
                    <td className="p-3">{visit.name}</td>
                    <td className="p-3">{visit.phone}</td>
                    <td className="p-3">{visit.email}</td>
                    <td className="p-3">
                      {new Date(visit.date).toLocaleString('pt-BR')}
                    </td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded text-white text-sm ${getStatusColor(visit.status)}`}>
                        {getStatusText(visit.status)}
                      </span>
                    </td>
                    <td className="p-3 space-x-2">
                      <div className="flex flex-wrap gap-2">
                        {/* Status update buttons */}
                        {visit.status !== "INTERESTED" && (
                          <button
                            onClick={() => handleUpdateStatus(visit.id, "INTERESTED")}
                            className="px-2 py-1 bg-yellow-600 rounded hover:bg-yellow-700 transition-colors text-white text-sm"
                            title="Marcar como Interessado"
                          >
                            Interessado
                          </button>
                        )}
                        {visit.status !== "CONFIRMED" && (
                          <button
                            onClick={() => handleUpdateStatus(visit.id, "CONFIRMED")}
                            className="px-2 py-1 bg-blue-600 rounded hover:bg-blue-700 transition-colors text-white text-sm"
                            title="Confirmar Visita"
                          >
                            Confirmar
                          </button>
                        )}
                        {visit.status !== "ACCOMPLISHED" && (
                          <button
                            onClick={() => handleUpdateStatus(visit.id, "ACCOMPLISHED")}
                            className="px-2 py-1 bg-green-600 rounded hover:bg-green-700 transition-colors text-white text-sm"
                            title="Marcar como Realizado"
                          >
                            Realizado
                          </button>
                        )}
                        {visit.status !== "CANCELED" && (
                          <button
                            onClick={() => handleUpdateStatus(visit.id, "CANCELED")}
                            className="px-2 py-1 bg-red-600 rounded hover:bg-red-700 transition-colors text-white text-sm"
                            title="Cancelar Visita"
                          >
                            Cancelar
                          </button>
                        )}

                        {/* Delete button */}
                        <button
                          onClick={() => handleDeleteVisit(visit.id)}
                          className="px-2 py-1 bg-gray-600 rounded hover:bg-gray-700 transition-colors text-white text-sm"
                          title="Excluir Visita"
                        >
                          Excluir
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}

export default ManageVisits;