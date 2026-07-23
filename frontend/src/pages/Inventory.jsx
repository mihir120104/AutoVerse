import { useEffect, useMemo, useState } from "react";
import VehicleTable from "../components/VehicleTable";
import AddVehicleDialog from "../components/inventory/AddVehicleDialog";
import { getVehicles } from "../services/vehicleService";
import { isAdmin } from "../utils/auth";

export default function Inventory() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [fuel, setFuel] = useState("");
  const [transmission, setTransmission] = useState("");

  useEffect(() => {
    fetchVehicles();
  }, []);

  async function fetchVehicles() {
    try {
      const data = await getVehicles();
      setVehicles(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const filteredVehicles = useMemo(() => {
    let result = [...vehicles];

    if (search) {
      result = result.filter(
        (vehicle) =>
          vehicle.make.toLowerCase().includes(search.toLowerCase()) ||
          vehicle.model.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category) {
      result = result.filter(
        (vehicle) => vehicle.category === category
      );
    }

    if (fuel) {
      result = result.filter(
        (vehicle) => vehicle.fuel_type === fuel
      );
    }

    if (transmission) {
      result = result.filter(
        (vehicle) => vehicle.transmission === transmission
      );
    }

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;

      case "year-new":
        result.sort((a, b) => b.year - a.year);
        break;

      case "year-old":
        result.sort((a, b) => a.year - b.year);
        break;

      case "stock":
        result.sort((a, b) => b.quantity - a.quantity);
        break;

      default:
        break;
    }

    return result;
  }, [
    vehicles,
    search,
    category,
    fuel,
    transmission,
    sortBy,
  ]);
  if (loading) {
    return (
      <div className="text-xl text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Vehicle Inventory
          </h1>

          <p className="text-slate-400">
            Manage dealership inventory.
          </p>
        </div>

        {isAdmin() && (
          <AddVehicleDialog
            onVehicleAdded={fetchVehicles}
          />
        )}

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-4">

        <input
          placeholder="Search Make / Model"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-white"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-white"
        >
          <option value="">All Categories</option>
          <option>SUV</option>
          <option>Sedan</option>
          <option>Hatchback</option>
          <option>Truck</option>
        </select>

        <select
          value={fuel}
          onChange={(e) => setFuel(e.target.value)}
          className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-white"
        >
          <option value="">All Fuel Types</option>
          <option>Petrol</option>
          <option>Diesel</option>
          <option>Electric</option>
          <option>Hybrid</option>
        </select>

        <select
          value={transmission}
          onChange={(e) => setTransmission(e.target.value)}
          className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-white"
        >
          <option value="">All Transmission</option>
          <option>Automatic</option>
          <option>Manual</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-white"
        >
          <option value="">Sort</option>
          <option value="price-low">Price: Low → High</option>
          <option value="price-high">Price: High → Low</option>
          <option value="year-new">Newest</option>
          <option value="year-old">Oldest</option>
          <option value="stock">Highest Stock</option>
        </select>

        <button
          onClick={() => {
            setSearch("");
            setCategory("");
            setFuel("");
            setTransmission("");
            setSortBy("");
          }}
          className="rounded-lg bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-400"
        >
          Reset
        </button>

      </div>

      <VehicleTable
        vehicles={filteredVehicles}
      />

    </div>
  );
}