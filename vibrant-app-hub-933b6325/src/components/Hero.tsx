
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/30 to-transparent -z-10" aria-hidden="true" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmMWY1ZjkiIGQ9Ik0zNiAzNGgxOHYxOEgzNHoiLz48cGF0aCBmaWxsPSIjZjFmNWY5IiBkPSJNMzYgMTZoMTh2MThoLTE4eiIvPjxwYXRoIGZpbGw9IiNmMWY1ZjkiIGQ9Ik0xOCAzNGgxOHYxOEgxOHoiLz48cGF0aCBmaWxsPSIjZjFmNWY5IiBkPSJNMTggMTZoMTh2MThoLTE4eiIvPjxwYXRoIGZpbGw9IiNmMWY1ZjkiIGQ9Ik0wIDM0aDE4djE4SDB6Ii8+PHBhdGggZmlsbD0iI2YxZjVmOSIgZD0iTTAgMTZoMTh2MThIMHoiLz48L2c+PC9zdmc+')]"
        style={{ opacity: 0.07 }}
        aria-hidden="true"
      />

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
              Launching Soon
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <span className="text-foreground">Beautiful, intuitive software</span>
            <span className="block text-primary mt-1">built for simplicity</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Crafted with precision and care, our platform offers a seamless experience
            that adapts to your workflow instead of forcing you to adapt to it.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <Link to="/register">
              <Button size="lg" className="w-full sm:w-auto font-medium bg-primary hover:bg-primary/90 group">
                Get Started 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="w-full sm:w-auto font-medium">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Floating design elements */}
        <div className="absolute left-1/4 top-1/4 w-24 h-24 bg-primary/5 rounded-full blur-xl -z-10" aria-hidden="true" />
        <div className="absolute right-1/4 bottom-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl -z-10" aria-hidden="true" />
      </div>
    </section>
  );
};

export default Hero;
