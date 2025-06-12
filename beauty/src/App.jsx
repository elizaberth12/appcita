// beauty/src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import CitasPage from './pages/CitasPage';
import CitaFormPage from './pages/CitaFormPage';
import NuevaCitaPage from './pages/NuevaCita';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import EditarCitaPage from './pages/EditarCitaPage';


import 'react-datepicker/dist/react-datepicker.css';

import  AuthProvider  from './context/AuthContext'; // ✅ Import correcto (con llaves)
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Rutas protegidas */}
          <Route element={<ProtectedRoute />}>
            <Route path="/citas" element={<CitasPage />} />
            <Route path="/nueva-cita" element={<NuevaCitaPage />} />
            <Route path="/editar-cita/:id" element={<EditarCitaPage />} />
            <Route path="/citas/:id" element={<CitaFormPage />} />
            <Route path="/perfil" element={<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
