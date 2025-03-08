
import React, { useState } from 'react';
import { 
  Home, 
  Car, 
  MapPin, 
  PlusSquare, 
  Search, 
  Building2, 
  User,
  ChevronRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('home');

  return (
    <div className="flex min-h-screen bg-[#001a33]">
      {/* Sidebar */}
      <div className="w-64 bg-[#003366] text-white flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-[#004488]">
          <img 
            src="/lovable-uploads/eb8bd52e-6e21-45f5-93d6-adc55be5b255.png" 
            alt="CESVI MÉXICO" 
            className="h-10"
          />
        </div>
        
        {/* Menú de navegación */}
        <nav className="flex-1 py-6">
          <ul className="space-y-1">
            <li>
              <button
                className={`w-full flex items-center py-3 px-6 ${
                  activeMenu === 'home' 
                    ? 'bg-[#0066cc] text-white' 
                    : 'text-gray-300 hover:bg-[#004488]'
                } transition-colors`}
                onClick={() => setActiveMenu('home')}
              >
                <Home className="h-5 w-5 mr-3" />
                <span>Página Principal</span>
                <ChevronRight className="ml-auto h-5 w-5" />
              </button>
            </li>
            <li>
              <button
                className={`w-full flex items-center py-3 px-6 ${
                  activeMenu === 'talleres' 
                    ? 'bg-[#0066cc] text-white' 
                    : 'text-gray-300 hover:bg-[#004488]'
                } transition-colors`}
                onClick={() => setActiveMenu('talleres')}
              >
                <Car className="h-5 w-5 mr-3" />
                <span>Talleres Mecánicos</span>
                <ChevronRight className="ml-auto h-5 w-5" />
              </button>
            </li>
            <li>
              <button
                className={`w-full flex items-center py-3 px-6 ${
                  activeMenu === 'ubicacion' 
                    ? 'bg-[#0066cc] text-white' 
                    : 'text-gray-300 hover:bg-[#004488]'
                } transition-colors`}
                onClick={() => setActiveMenu('ubicacion')}
              >
                <MapPin className="h-5 w-5 mr-3" />
                <span>Ubicación Talleres</span>
                <ChevronRight className="ml-auto h-5 w-5" />
              </button>
            </li>
            <li>
              <button
                className={`w-full flex items-center py-3 px-6 ${
                  activeMenu === 'agregar' 
                    ? 'bg-[#0066cc] text-white' 
                    : 'text-gray-300 hover:bg-[#004488]'
                } transition-colors`}
                onClick={() => setActiveMenu('agregar')}
              >
                <PlusSquare className="h-5 w-5 mr-3" />
                <span>Agregar Siniestros</span>
                <ChevronRight className="ml-auto h-5 w-5" />
              </button>
            </li>
            <li>
              <button
                className={`w-full flex items-center py-3 px-6 ${
                  activeMenu === 'consultar' 
                    ? 'bg-[#0066cc] text-white' 
                    : 'text-gray-300 hover:bg-[#004488]'
                } transition-colors`}
                onClick={() => setActiveMenu('consultar')}
              >
                <Search className="h-5 w-5 mr-3" />
                <span>Consultar Siniestros</span>
                <ChevronRight className="ml-auto h-5 w-5" />
              </button>
            </li>
            <li>
              <button
                className={`w-full flex items-center py-3 px-6 ${
                  activeMenu === 'agencia' 
                    ? 'bg-[#0066cc] text-white' 
                    : 'text-gray-300 hover:bg-[#004488]'
                } transition-colors`}
                onClick={() => setActiveMenu('agencia')}
              >
                <Building2 className="h-5 w-5 mr-3" />
                <span>Consultar por Agencia</span>
                <ChevronRight className="ml-auto h-5 w-5" />
              </button>
            </li>
          </ul>
        </nav>
        
        {/* Perfil de usuario */}
        <div className="p-4 border-t border-[#004488] flex items-center">
          <div className="bg-[#002244] rounded-full p-2 mr-3">
            <User className="h-6 w-6 text-gray-300" />
          </div>
          <div className="overflow-hidden">
            <div className="text-sm font-medium truncate">Luis Manuel D.</div>
            <div className="text-xs text-gray-400 truncate">A01772731</div>
          </div>
        </div>
      </div>
      
      {/* Contenido principal */}
      <div className="flex-1 overflow-auto">
        {/* Encabezado */}
        <div className="bg-[#001a33] text-white p-6 flex items-center">
          <Home className="h-8 w-8 mr-3" />
          <h1 className="text-3xl font-light">Página Principal</h1>
        </div>
        
        {/* Filtros */}
        <div className="bg-[#001a33] px-6 pb-6 flex gap-6 text-white">
          <div className="flex items-center">
            <span className="mr-2">2019</span>
            <ChevronRight className="h-5 w-5" />
          </div>
          <div className="flex items-center">
            <span className="mr-2">Mes</span>
            <ChevronRight className="h-5 w-5" />
          </div>
          <div className="flex items-center">
            <span className="mr-2">Ubicación</span>
            <ChevronRight className="h-5 w-5" />
          </div>
          <div className="flex items-center">
            <span className="mr-2">Intervalo</span>
            <ChevronRight className="h-5 w-5" />
          </div>
        </div>
        
        {/* Dashboard - Grid de tarjetas */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Tarjeta 1 - Total Siniestros */}
          <div className="bg-[#1e2a3a] rounded-md p-6 flex items-center justify-between">
            <div className="flex items-center">
              <div className="mr-4">
                <Car className="h-12 w-12 text-[#ff00ff]" />
              </div>
              <div>
                <div className="text-gray-400 text-sm">Total de Siniestros</div>
                <div className="text-[#00ffcc] text-3xl font-bold">803 K</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-4">
                <Building2 className="h-12 w-12 text-[#cc33ff]" />
              </div>
              <div>
                <div className="text-gray-400 text-sm">Total de Talleres</div>
                <div className="text-[#00ffcc] text-3xl font-bold">1,05 Mi</div>
              </div>
            </div>
          </div>
          
          {/* Tarjeta 2 - Proyectos */}
          <div className="bg-[#1e2a3a] rounded-md p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-[#007acc] rounded-full p-2 mr-4">
                  <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#00ccff]" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white text-3xl font-bold">458</div>
                  <div className="text-[#00ccff] text-sm">Projects</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-gray-300 text-sm">On Time</div>
                <div className="text-white font-bold">328</div>
                <div className="text-gray-300 text-sm">Behind Schedule</div>
                <div className="text-white font-bold">328</div>
              </div>
            </div>
          </div>
          
          {/* Tarjeta 3 - Clientes */}
          <div className="bg-[#1e2a3a] rounded-md p-6">
            <div className="flex justify-between">
              <div>
                <div className="text-[#cc33ff] mb-2">10 Best Customers</div>
                <div className="text-[#00ffcc] text-3xl font-bold">228 K</div>
              </div>
              <div>
                <div className="text-[#cc33ff] mb-2">10 Best Customers</div>
                <div className="text-[#00ffcc] text-3xl font-bold">228 K</div>
              </div>
            </div>
          </div>
          
          {/* Tarjeta 4 - Gráfico de barras */}
          <div className="bg-[#1e2a3a] rounded-md p-6">
            <div className="text-gray-300 mb-4">Intervalos por costo total de siniestro</div>
            <div className="flex items-end justify-between h-32">
              {[25, 40, 20, 60, 35, 75, 90, 65].map((height, index) => (
                <div 
                  key={index} 
                  className="w-6 bg-gradient-to-t from-[#0066cc] to-[#00ccff]"
                  style={{ height: `${height}%` }}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Tarjeta 5 - Datos por temporada */}
          <div className="bg-[#1e2a3a] rounded-md p-6">
            <div className="text-gray-300 mb-4">Total</div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-gray-400">Spring</div>
                <div className="text-[#00cc99] font-bold">U$ 123.567,32</div>
              </div>
              <div>
                <div className="text-gray-400">Summer</div>
                <div className="text-[#00cc99] font-bold">U$ 123.567,32</div>
              </div>
              <div>
                <div className="text-gray-400">Autumn</div>
                <div className="text-[#00cc99] font-bold">U$ 123.567,32</div>
              </div>
              <div>
                <div className="text-gray-400">Winter</div>
                <div className="text-[#00cc99] font-bold">U$ 123.567,32</div>
              </div>
            </div>
          </div>
          
          {/* Tarjeta 6 - Datos de redes sociales */}
          <div className="bg-[#1e2a3a] rounded-md p-6">
            <div className="mb-4 flex items-center">
              <div className="bg-[#3b5998] rounded-full p-2 mr-3">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor">
                  <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" />
                </svg>
              </div>
              <div>
                <div className="text-white text-xl font-bold">U$ 589,90</div>
                <div className="text-[#00cc99] text-sm">Facebook Sales Ads</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-[#db4437] rounded-full p-2 mr-3">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" />
                </svg>
              </div>
              <div>
                <div className="text-white text-xl font-bold">U$ 1035,98</div>
                <div className="text-[#00cc99] text-sm">Google Sales Ads</div>
              </div>
            </div>
          </div>
          
          {/* Tarjeta 7 - Ventas */}
          <div className="bg-[#1e2a3a] rounded-md p-6">
            <div className="flex items-center mb-3">
              <div className="bg-[#6a5acd] rounded-full p-2 mr-3">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12H2M16 6L22 12L16 18M8 6L2 12L8 18" />
                </svg>
              </div>
              <div>
                <div className="text-white text-xl font-bold">U$ 58.089,90</div>
                <div className="text-[#00cc99] text-sm">Sales</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1 text-sm">
              <div className="text-gray-400">Pending</div>
              <div className="text-white">R$ 23.789,56</div>
              <div className="text-gray-400">Completed</div>
              <div className="text-white">U$ 32.520,65</div>
            </div>
          </div>
          
          {/* Tarjeta 8 - Mapa */}
          <div className="bg-[#1e2a3a] rounded-md p-6">
            <div className="text-gray-300 mb-4">Sales By Region</div>
            <div className="flex justify-center items-center">
              <svg width="200" height="140" viewBox="0 0 300 200">
                <path d="M130,20 L100,30 L90,50 L95,70 L80,90 L85,110 L105,120 L110,140 L140,150 L160,135 L180,140 L200,120 L220,130 L210,100 L220,80 L200,70 L190,45 L160,40 L140,30 Z" 
                  fill="#555" 
                  stroke="#777" 
                  strokeWidth="1"
                />
                <text x="150" y="90" textAnchor="middle" fill="#00cc99" fontSize="12">U$ 890 K</text>
              </svg>
            </div>
          </div>
          
          {/* Tarjeta 9 - Training */}
          <div className="bg-[#1e2a3a] rounded-md p-6">
            <div className="flex items-center mb-3">
              <div className="bg-[#ff9900] rounded-full p-2 mr-3">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21M23 21V19C23 16.7909 21.2091 15 19 15H18M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7ZM19 7C19 9.20914 17.2091 11 15 11C12.7909 11 11 9.20914 11 7C11 4.79086 12.7909 3 15 3C17.2091 3 19 4.79086 19 7Z" />
                </svg>
              </div>
              <div>
                <div className="text-white text-xl font-bold">U$ 12.500,46</div>
                <div className="text-[#00cc99] text-sm">Training</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1 text-sm">
              <div className="text-gray-400">Pending</div>
              <div className="text-white">555</div>
              <div className="text-gray-400">Completed</div>
              <div className="text-white">221</div>
            </div>
          </div>
          
          {/* Tarjeta 10 - Ventas por consignación */}
          <div className="bg-[#1e2a3a] rounded-md p-6">
            <div className="flex items-center mb-3">
              <div className="bg-[#9966cc] rounded-full p-2 mr-3">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3H21V21H3V3Z M9 3V21 M3 9H21 M3 15H21" />
                </svg>
              </div>
              <div>
                <div className="text-white text-xl font-bold">U$ 4.089,90</div>
                <div className="text-[#00cc99] text-sm">Consignment Sales</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1 text-sm">
              <div className="text-gray-400">Pending</div>
              <div className="text-white">U$ 1400,90</div>
              <div className="text-gray-400">Completed</div>
              <div className="text-white">U$ 3.200,00</div>
            </div>
          </div>
          
          {/* Tarjeta 11 - Ventas directas */}
          <div className="bg-[#1e2a3a] rounded-md p-6">
            <div className="flex items-center mb-3">
              <div className="bg-[#cc33cc] rounded-full p-2 mr-3">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.59 13.41L13.42 20.58C13.04 20.96 12.53 21.16 12 21.16C11.47 21.16 10.96 20.96 10.58 20.58L3.41 13.41C3.03 13.03 2.83 12.52 2.83 11.99C2.83 11.46 3.03 10.95 3.41 10.57L10.58 3.4C10.96 3.02 11.47 2.82 12 2.82C12.53 2.82 13.04 3.02 13.42 3.4L20.59 10.57C20.97 10.95 21.17 11.46 21.17 11.99C21.17 12.52 20.97 13.03 20.59 13.41Z" />
                  <path d="M7.99995 12H16M11.9999 8V16" />
                </svg>
              </div>
              <div>
                <div className="text-white text-xl font-bold">U$ 8.900,23</div>
                <div className="text-[#00cc99] text-sm">Direct Sales</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1 text-sm">
              <div className="text-gray-400">Pending</div>
              <div className="text-white">U$ 850,45</div>
              <div className="text-gray-400">Completed</div>
              <div className="text-white">U$ 2.567,84</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
