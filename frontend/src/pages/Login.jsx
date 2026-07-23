import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        setLoading(true);
        setError("");

        try {
            const data = await login(email, password);

            localStorage.setItem(
                "access_token",
                data.access_token
            );

            localStorage.setItem(
                "role",
                data.role
            );

            alert("Login Successful !");

            navigate("/dashboard");
        } catch (err) {
            setError("Invalid email or password");
        }

        setLoading(false);
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">

            <div className="w-full w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-6 md:p-8 shadow-2xl">

                <h1 className="text-center text-3xl md:text-4xl font-bold text-cyan-400">
                    AutoVerse
                </h1>

                <p className="mt-2 text-center text-slate-400">
                    Vehicle Inventory Platform
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5"
                >
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />

                    {error && (
                        <p className="text-sm text-red-400">
                            {error}
                        </p>
                    )}

                    <button
                        className="w-full rounded-xl bg-cyan-500 py-3 font-semibold text-black transition hover:bg-cyan-400"
                        disabled={loading}
                    >
                        {loading ? "Signing In..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}