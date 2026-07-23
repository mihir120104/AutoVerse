import { useState } from "react";

export default function VehicleForm({
  initialValues,
  onSubmit,
  submitText = "Save Vehicle",
}) {
  const [form, setForm] = useState(
    initialValues || {
      make: "",
      model: "",
      category: "",
      year: "",
      fuel_type: "",
      transmission: "",
      price: "",
      quantity: "",
      image_url: "",
      description: "",
    }
  );

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({
      ...form,
      year: Number(form.year),
      price: Number(form.price),
      quantity: Number(form.quantity),
    });
  }

  const inputClass =
    "w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none focus:border-cyan-500";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input
        name="make"
        placeholder="Make"
        value={form.make}
        onChange={handleChange}
        className={inputClass}
        required
      />

      <input
        name="model"
        placeholder="Model"
        value={form.model}
        onChange={handleChange}
        className={inputClass}
        required
      />

      <input
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
        className={inputClass}
        required
      />

      <input
        type="number"
        name="year"
        placeholder="Year"
        value={form.year}
        onChange={handleChange}
        className={inputClass}
        required
      />

      <input
        name="fuel_type"
        placeholder="Fuel Type"
        value={form.fuel_type}
        onChange={handleChange}
        className={inputClass}
      />

      <input
        name="transmission"
        placeholder="Transmission"
        value={form.transmission}
        onChange={handleChange}
        className={inputClass}
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        className={inputClass}
        required
      />

      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={form.quantity}
        onChange={handleChange}
        className={inputClass}
        required
      />

      <input
        name="image_url"
        placeholder="Image URL"
        value={form.image_url}
        onChange={handleChange}
        className={inputClass}
      />

      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="min-h-28 w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none focus:border-cyan-500"
      />

      <button
        type="submit"
        className="w-full rounded-lg bg-cyan-500 py-3 font-semibold text-black transition hover:bg-cyan-400"
      >
        {submitText}
      </button>
    </form>
  );
}