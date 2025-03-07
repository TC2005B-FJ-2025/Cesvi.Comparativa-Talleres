import { useEffect, useState } from "react";
import api from "../lib/axios";

export function ApiTest() {
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const testApi = async () => {
      try {
        const response = await api.get("/test");
        setMessage(response.data.message);
      } catch (err) {
        setError("Error al conectar con la API");
        console.error(err);
      }
    };

    testApi();
  }, []);

  return (
    <div className="p-4">
      {message && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          {message}
        </div>
      )}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}
    </div>
  );
}
