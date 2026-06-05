import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';
import Header from "../components/common/Header"
import ProfileProvider from '../providers/ProfileProvider';
import PostProvider from '../providers/PostProvider';

const PrivateRoutes = () => {
    const {auth}=useAuth();
    return (
      <>
        {auth.authToken ? (
          <>
            <PostProvider>
              <ProfileProvider>
                <Header></Header>
                <main className="mx-auto max-w-255 py-8">
                  <div className="container">
                    <Outlet></Outlet>
                  </div>
                </main>
              </ProfileProvider>
            </PostProvider>
          </>
        ) : (
          <Navigate to="/login"></Navigate>
        )}
      </>
    );
};

export default PrivateRoutes;