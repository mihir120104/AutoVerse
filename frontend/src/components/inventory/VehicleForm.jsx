import { useEffect, useState } from "react";

export default function VehicleForm({
  initialValues,
  onSubmit,
  submitText = "Save Vehicle",
}) {
  const emptyForm = {
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
  };

  const [form, setForm] = useState(initialValues || emptyForm);

  useEffect(() => {
    setForm(initialValues || emptyForm);
  }, [initialValues]);

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
        value={form.make}
        onChange={handleChange}
        placeholder="Make"
        className={inputClass}
        required
      />

      <input
        name="model"
        value={form.model}
        onChange={handleChange}
        placeholder="Model"
        className={inputClass}
        required
      />

      <input
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Category"
        className={inputClass}
        required
      />

      <input
        type="number"
        name="year"
        value={form.year}
        onChange={handleChange}
        placeholder="Year"
        className={inputClass}
        required
      />

      <input
        name="fuel_type"
        value={form.fuel_type}
        onChange={handleChange}
        placeholder="Fuel Type"
        className={inputClass}
      />

      <input
        name="transmission"
        value={form.transmission}
        onChange={handleChange}
        placeholder="Transmission"
        className={inputClass}
      />

      <input
        type="number"
        name="price"
        value={form.price}
        onChange={handleChange}
        placeholder="Price"
        className={inputClass}
        required
      />

      <input
        type="number"
        name="quantity"
        value={form.quantity}
        onChange={handleChange}
        placeholder="Quantity"
        className={inputClass}
        required
      />

      <input
        name="image_url"
        value={form.image_url}
        onChange={handleChange}
        placeholder="Image URL"
        className={inputClass}
      />

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        className="min-h-28 w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none focus:border-cyan-500"
      />

      <button
        type="submit"
        className="w-full rounded-lg bg-cyan-500 py-3 font-semibold text-black hover:bg-cyan-400"
      >
        {submitText}
      </button>
    </form>
  );
}