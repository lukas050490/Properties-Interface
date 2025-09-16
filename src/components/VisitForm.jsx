import React, { useState } from "react";
import { api } from "../services/api";

function VisitForm({ propertyId, onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const payload = {
        ...form,
        status: "INTERESTED",
        date: new Date(form.date).toISOString(),
      };

      console.log("Sending visit request:", payload);

      const response = await api.post(`/manager/properties/${propertyId}/visit`, payload);
      console.log("Visit response:", response);

      setForm({ name: "", phone: "", email: "", date: "" });
      if (onSuccess) onSuccess();
      alert("Visita agendada com sucesso!");

      // ... rest of your code
    } catch (error) {
      console.error("Full error:", error);
      if (error.response) {
        console.error("Error response:", error.response.data);
        setError(error.response.data.message || "Erro ao agendar visita.");
      }
    }
  }


  return (
    <form onSubmit={handleSubmit} className="bg-[#032F30] p-6 rounded shadow-md max-w-md mx-auto">
      <h3 className="text-[#0C969C] text-xl font-semibold mb-4">Agendar Visita</h3>

      <label className="block mb-2 text-[#6BA3BE]">
        Nome
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-[#031716] border border-[#274D60] focus:outline-none focus:ring-2 focus:ring-[#0A7075] mt-1"
          placeholder="Seu nome"
        />
      </label>

      <label className="block mb-2 text-[#6BA3BE]">
        Telefone (Formato: (XX) XXXXX-XXXX)
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          // pattern="\(\d{2}\) \d{4,5}-\d{4}"
          className="w-full p-2 rounded bg-[#031716] border border-[#274D60] focus:outline-none focus:ring-2 focus:ring-[#0A7075] mt-1"
          placeholder="(99) 99999-9999"
        />
      </label>

      <label className="block mb-2 text-[#6BA3BE]">
        Email
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-[#031716] border border-[#274D60] focus:outline-none focus:ring-2 focus:ring-[#0A7075] mt-1"
          placeholder="email@exemplo.com"
        />
      </label>

      <label className="block mb-4 text-[#6BA3BE]">
        Data da Visita
        <input
          type="datetime-local"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-[#031716] border border-[#274D60] focus:outline-none focus:ring-2 focus:ring-[#0A7075] mt-1"
        />
      </label>

      {error && <p className="mb-2 text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#0A7075] hover:bg-[#0C969C] text-white py-2 rounded transition-colors disabled:opacity-50"
      >
        {loading ? "Enviando..." : "Agendar Visita"}
      </button>
    </form>
  );
}

export default VisitForm;
