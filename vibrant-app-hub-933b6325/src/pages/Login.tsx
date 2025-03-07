import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Loader2, User, Lock } from "lucide-react";
import { useState } from "react";
import { auth } from "@/lib/auth";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await auth.login(email, password);
      toast({
        title: "¡Bienvenido!",
        description: "Has iniciado sesión correctamente.",
      });
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Error",
        description: "Credenciales incorrectas.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[url('/lovable-uploads/eb8bd52e-6e21-45f5-93d6-adc55be5b255.png')] bg-cover bg-center">
      {/* Header con logo */}
      <div className="w-full bg-[#003366] py-6 flex justify-center">
        <div className="container flex justify-center">
          <img
            src="/lovable-uploads/eb8bd52e-6e21-45f5-93d6-adc55be5b255.png"
            alt="CESVI MÉXICO"
            className="h-14"
          />
        </div>
      </div>

      {/* Contenido principal */}
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="bg-white rounded-md shadow-lg w-full max-w-md overflow-hidden">
          {/* Encabezado del formulario */}
          <div className="bg-[#0099cc] text-white text-center py-4">
            <h1 className="text-xl font-bold">USER LOG-IN</h1>
          </div>

          {/* Formulario */}
          <div className="p-8">
            <div className="flex justify-center mb-6">
              <div className="bg-gray-100 rounded-full p-6">
                <User className="h-12 w-12 text-gray-400" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Correo electrónico"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12"
                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>

                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Contraseña"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 h-12"
                  />
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="rememberMe" checked={false} />
                  <label
                    htmlFor="rememberMe"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-[#0099cc] hover:underline">
                  Forgot Password?
                </a>
              </div>

              <Button
                type="submit"
                className="w-full h-12 font-bold bg-[#003366] hover:bg-[#002244]"
                disabled={loading}
              >
                {loading ? "Iniciando sesión..." : "Iniciar sesión"}
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
