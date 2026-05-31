import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';
import Header from "../components/common/Header"

const PrivateRoutes = () => {
    const {auth}=useAuth();
    return (
      <>
        {auth.user ? (
          <>
            <Header></Header>
            <main className="mx-auto max-w-255 py-8">
              <div className="container">
                <Outlet></Outlet>
              </div>
            </main>
          </>
        ) : (
          <Navigate to="/login"></Navigate>
        )}
      </>
    );
};

export default PrivateRoutes;