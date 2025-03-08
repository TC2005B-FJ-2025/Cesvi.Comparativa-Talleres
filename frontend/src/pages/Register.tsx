
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthForm from '@/components/AuthForm';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center py-16 md:py-24">
        <div className="container">
          <div className="max-w-md mx-auto text-center mb-10">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-display font-semibold text-primary">elegance.</span>
            </Link>
            <h1 className="text-2xl md:text-3xl font-display font-bold mb-2">Create your account</h1>
            <p className="text-muted-foreground">Sign up to get started with elegance</p>
          </div>
          
          <div className="mx-auto flex justify-center">
            <div className="glass rounded-xl border border-border/50 shadow-sm p-8 w-full max-w-md">
              <AuthForm type="register" />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;
