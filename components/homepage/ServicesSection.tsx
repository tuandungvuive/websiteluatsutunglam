import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { servicesData } from '@/lib/utils/constants';

export default function ServicesSection() {
  const { badge, heading, services, cta } = servicesData;

  return (
    <section className="bg-gray-50 py-12 lg:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
            <badge.icon className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-blue-600 text-sm font-medium">
              {badge.text}
            </span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 legal-heading">
            {heading.title}
          </h2>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 legal-heading">
            {heading.subtitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto legal-text">
            {heading.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 h-full flex flex-col bg-background border-primary/10 hover:border-primary/30">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-secondary border border-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground legal-heading">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 pt-0">
                <CardDescription className="text-muted-foreground text-base mb-6 legal-text leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="justify-center pt-0">
                <Link 
                  href={service.href}
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 legal-button shadow-lg hover:shadow-xl"
                >
                  {service.buttonText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <Link 
            href={cta.href}
            className="inline-flex items-center justify-center px-10 py-4 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 legal-button shadow-lg hover:shadow-xl"
          >
            {cta.text}
            <ArrowRight className="w-5 h-5 ml-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};
