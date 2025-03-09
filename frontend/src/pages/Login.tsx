import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Loader2, User, Lock } from "lucide-react";
import { useState } from "react";
import { auth } from "@/lib/auth";
// === IMAGENES ===
import logo from "/logos/logo-cesvi.png";
import backgnd from "/img/cesviInstalaciones.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, rememberMe: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await auth.login(formData.email, formData.password);

      if (formData.rememberMe) {
        // Store user preferences if remember me is checked
        localStorage.setItem("rememberMe", "true");
      }

      toast.success("Sesión iniciada correctamente");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error de autenticación:", error);
      toast.error(
        "Error al iniciar sesión. Por favor verifica tus credenciales."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center size-" style={{backgroundImage: `url(${backgnd})`}}>
      {/* Header con logo */}
      <div className="w-full bg-[#003366] flex justify-center  h-[95px]">
        <div className="container flex justify-center items-center">
          <img src={logo} alt="CESVI MÉXICO" className="h-[85px]" />
        </div>
      </div>

      {/* Contenido principal */}
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="bg-white rounded-md shadow-lg w-full max-w-md overflow-hidden">
          {/* Encabezado del formulario */}
          <div className="bg-[#0099cc] text-white text-center py-4">
            <h1 className="text-xl font-medium">USER LOG-IN</h1>
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
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 h-12"
                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>

                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10 h-12"
                  />
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="rememberMe"
                    checked={formData.rememberMe}
                    onCheckedChange={handleCheckboxChange}
                  />
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
                className="w-full h-12 font-bold bg-[#003366] hover:bg-[#0099cc]"
                disabled={loading}
              >
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                LOG-IN
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
