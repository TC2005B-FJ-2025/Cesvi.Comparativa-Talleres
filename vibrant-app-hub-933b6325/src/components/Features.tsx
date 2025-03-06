
import React from 'react';
import { ChevronRight, Layers, Shield, BarChart3, Zap, Repeat, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const featuresList = [
  {
    icon: <Layers className="h-10 w-10" />,
    title: 'Intuitive Interface',
    description: 'Designed with simplicity and usability in mind, our interface is clean, intuitive, and a joy to use.',
    color: 'bg-blue-500/10 text-blue-500',
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: 'Advanced Security',
    description: 'Your data is protected with the latest encryption standards and secure authentication practices.',
    color: 'bg-purple-500/10 text-purple-500',
  },
  {
    icon: <BarChart3 className="h-10 w-10" />,
    title: 'Detailed Analytics',
    description: 'Gain valuable insights with comprehensive data visualization and reporting tools.',
    color: 'bg-green-500/10 text-green-500',
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: 'Lightning Fast',
    description: 'Optimized for speed and performance, ensuring swift responses and minimal loading times.',
    color: 'bg-amber-500/10 text-amber-500',
  },
  {
    icon: <Repeat className="h-10 w-10" />,
    title: 'Seamless Integration',
    description: 'Connect with your favorite tools and services for a streamlined workflow experience.',
    color: 'bg-teal-500/10 text-teal-500',
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: 'Collaborative Workspace',
    description: 'Work together with your team in real-time, enhancing productivity and creativity.',
    color: 'bg-indigo-500/10 text-indigo-500',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-secondary/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Elegant Features</h2>
          <p className="text-muted-foreground text-lg">
            Our platform is built with a focus on simplicity, functionality, and beauty.
            Every feature is carefully designed to enhance your experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index}
              className="group glass rounded-2xl p-8 shadow-sm border border-border/50 transition-all duration-300 hover:shadow-md"
            >
              <div className={cn('rounded-xl p-3 inline-flex mb-6', feature.color)}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              
              <a 
                href="#" 
                className="inline-flex items-center text-sm font-medium text-primary group-hover:underline"
              >
                Learn more
                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
