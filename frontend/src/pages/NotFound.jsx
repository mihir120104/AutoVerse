import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white">
      <h1 className="text-7xl font-bold">404</h1>

      <p className="mt-4">
        Page not found.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-lg bg-cyan-500 px-5 py-3 text-black"
      >
        Go Home
      </Link>
    </div>
  );
}