import { useState, useEffect } from "react";

const initialForm = {
  name: "",
  totalValue: 0,
  numberOfRooms: 0,
  size: 0,
  rentValue: 0,
  condoValue: 0,
  taxValue: 0,
  numberOfBathrooms: 0,
  isFurnished: false,
  garageSlots: 0,
  areaPetsAllowed: false,
  isNextToSubway: false,
  isActive: true,
  description: "",
  isRent: true,
  isSale: true,
  address: "",
  type: "",
  latitude: 0,
  longitude: 0,
};

function PropertyForm({ onSubmit, initialData, onCancel }) {
  const [form, setForm] = useState(initialForm);
  const [mainImage, setMainImage] = useState(null);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    if (initialData) {
      setForm({ ...initialData });
    }
  }, [initialData]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({
      ...f,
      [name]: type === "checkbox" ? checked : type === "number" ? Number(value) : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      ...form,
      latitude: form.latitude ? Number(form.latitude) : 0,
      longitude: form.longitude ? Number(form.longitude) : 0,
    };
    onSubmit(formData, mainImage, gallery);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-primaryDark2 p-6 rounded-lg shadow-lg max-w-3xl mx-auto text-primaryLight"
    >
      <h2 className="text-2xl font-semibold mb-6">
        {initialData ? "Editar Imóvel" : "Novo Imóvel"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>
          <label className="block mb-1">Nome</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-primaryDark placeholder-secondaryLight text-primaryLight"
            type="text"
          />
        </div>

        <div>
          <label className="block mb-1">Descrição</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            maxLength={1000}
            className="w-full p-2 rounded bg-primaryDark placeholder-secondaryLight text-primaryLight resize-none h-20"
          />
        </div>

        <div>
          <label className="block mb-1">Endereço</label>
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-primaryDark placeholder-secondaryLight text-primaryLight"
            type="text"
          />
        </div>

        <div>
          <label className="block mb-1">Tipo</label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-primaryDark placeholder-secondaryLight text-primaryLight"
            type="text"
          >
            <option value="">Selecione...</option>
            <option value="APARTMENT">Apartamento</option>
            <option value="HOUSE">Casa</option>
            <option value="TOWNHOUSE">Sobrado</option>
            <option value="STUDIO">Studio</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">Imagem Principal</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setMainImage(e.target.files ? e.target.files[0] : null)}
            required={!initialData}
            className="w-full p-2 rounded bg-primaryDark placeholder-secondaryLight text-primaryLight"
          />
        </div>

        <div>
          <label className="block mb-1">Imagens Do Imóvel</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => setGallery(e.target.files ? Array.from(e.target.files) : [])}
            className="w-full p-2 rounded bg-primaryDark placeholder-secondaryLight text-primaryLight"
          />
        </div>

        <div>
          <label className="block mb-1">Latitude</label>
          <input
            name="latitude"
            type="number"
            step="any"
            value={form.latitude}
            onChange={handleChange}
            className="w-full p-2 rounded bg-primaryDark placeholder-secondaryLight text-primaryLight"
          />
        </div>

        <div>
          <label className="block mb-1">Longitude</label>
          <input
            name="longitude"
            type="number"
            step="any"
            value={form.longitude}
            onChange={handleChange}
            className="w-full p-2 rounded bg-primaryDark placeholder-secondaryLight text-primaryLight"
          />
        </div>

        <div>
          <label className="block mb-1">Tamanho (m²)</label>
          <input
            name="size"
            value={form.size}
            onChange={handleChange}
            required
            type="number"
            min={0}
            className="w-full p-2 rounded bg-primaryDark placeholder-secondaryLight text-primaryLight"
          />
        </div>

        <div>
          <label className="block mb-1">Valor total (R$)</label>
          <input
            name="totalValue"
            value={form.totalValue}
            onChange={handleChange}
            required
            type="number"
            min={0}
            className="w-full p-2 rounded bg-primaryDark placeholder-secondaryLight text-primaryLight"
          />
        </div>

        <div>
          <label className="block mb-1">Valor do aluguel (R$)</label>
          <input
            name="rentValue"
            value={form.rentValue}
            onChange={handleChange}
            type="number"
            min={0}
            className="w-full p-2 rounded bg-primaryDark placeholder-secondaryLight text-primaryLight"
          />
        </div>

        <div>
          <label className="block mb-1">Valor do condomínio (R$)</label>
          <input
            name="condoValue"
            value={form.condoValue}
            onChange={handleChange}
            type="number"
            min={0}
            className="w-full p-2 rounded bg-primaryDark placeholder-secondaryLight text-primaryLight"
          />
        </div>

        <div>
          <label className="block mb-1">Valor do IPTU (R$)</label>
          <input
            name="taxValue"
            value={form.taxValue}
            onChange={handleChange}
            type="number"
            min={0}
            className="w-full p-2 rounded bg-primaryDark placeholder-secondaryLight text-primaryLight"
          />
        </div>

        <div>
          <label className="block mb-1">Número de quartos</label>
          <input
            name="numberOfRooms"
            value={form.numberOfRooms}
            onChange={handleChange}
            required
            type="number"
            min={0}
            className="w-full p-2 rounded bg-primaryDark placeholder-secondaryLight text-primaryLight"
          />
        </div>

        <div>
          <label className="block mb-1">Número de banheiros</label>
          <input
            name="numberOfBathrooms"
            value={form.numberOfBathrooms}
            onChange={handleChange}
            required
            type="number"
            min={0}
            className="w-full p-2 rounded bg-primaryDark placeholder-secondaryLight text-primaryLight"
          />
        </div>

        <div>
          <label className="block mb-1">Vagas na garagem</label>
          <input
            name="garageSlots"
            value={form.garageSlots}
            onChange={handleChange}
            required
            type="number"
            min={0}
            className="w-full p-2 rounded bg-primaryDark placeholder-secondaryLight text-primaryLight"
          />
        </div>

        <div>
          <label className="inline-flex items-center space-x-2">
            <input
              type="checkbox"
              name="isFurnished"
              checked={form.isFurnished}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span>Mobiliado</span>
          </label>
        </div>

        <div>
          <label className="inline-flex items-center space-x-2">
            <input
              type="checkbox"
              name="areaPetsAllowed"
              checked={form.areaPetsAllowed}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span>Permite pets na área</span>
          </label>
        </div>

        <div>
          <label className="inline-flex items-center space-x-2">
            <input
              type="checkbox"
              name="isNextToSubway"
              checked={form.isNextToSubway}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span>Próximo ao metrô</span>
          </label>
        </div>

        <div>
          <label className="inline-flex items-center space-x-2">
            <input
              type="checkbox"
              name="isActive"
              checked={form.isActive}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span>Imóvel ativo</span>
          </label>
        </div>

        <div>
          <label className="inline-flex items-center space-x-2">
            <input
              type="checkbox"
              name="isSale"
              checked={form.isSale}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span>Disponível para venda</span>
          </label>
        </div>

        <div>
          <label className="inline-flex items-center space-x-2">
            <input
              type="checkbox"
              name="isRent"
              checked={form.isRent}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span>Disponível para aluguel</span>
          </label>
        </div>
      </div>

      <div className="mt-6 flex space-x-4 justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="bg-secondaryDark hover:bg-secondaryLight py-2 px-4 rounded transition-colors"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="bg-primaryMid hover:bg-primaryLight py-2 px-6 rounded font-semibold transition-colors"
        >
          Salvar
        </button>
      </div>
    </form>
  );
}

export default PropertyForm;

