"use client";

import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { activityData } from '@/lib/utils/activity';

interface ServiceDetailPageProps {
  serviceData: {
    backLink: {
      href: string;
      text: string;
      icon: React.ComponentType<{ className?: string }>;
    };
    hero: {
      icon: React.ComponentType<{ className?: string }>;
      title: string;
      badge: string;
      description: string;
      buttons: Array<{
        href: string;
        text: string;
        icon?: React.ComponentType<{ className?: string }>;
        variant: 'primary' | 'secondary';
      }>;
    };
    mainContent: {
      icon: React.ComponentType<{ className?: string }>;
      title: string;
      description: string[];
    };
    professionalAreas: {
      title: string;
      icon: React.ComponentType<{ className?: string }>;
      areas: Array<{
        icon: React.ComponentType<{ className?: string }>;
        title: string;
      }>;
    };
    sidebar: {
      contact: {
        icon: React.ComponentType<{ className?: string }>;
        title: string;
        description: string;
        buttons: Array<{
          href: string;
          text: string;
          icon: React.ComponentType<{ className?: string }>;
          variant: 'primary' | 'secondary';
        }>;
      };
      specialties: {
        title: string;
        icon: React.ComponentType<{ className?: string }>;
        items: Array<{
          title: string;
          description: string;
        }>;
      };
      relatedAreas: {
        title: string;
        links: Array<{
          href: string;
          text: string;
        }>;
      };
    };
    services: {
      title: string;
      items: Array<{
        icon: React.ComponentType<{ className?: string }>;
        title: string;
        description: string;
      }>;
    };
  };
}

export default function ServiceDetailPage({ serviceData }: ServiceDetailPageProps) {
  const { cta } = activityData;
  const { backLink, hero, mainContent, professionalAreas, sidebar, services } = serviceData;

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Back Button */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <Link
            href={backLink.href}
            className="inline-flex items-center text-primary hover:text-blue-800 transition-colors mb-6"
          >
            <backLink.icon className="w-5 h-5 mr-2" />
            {backLink.text}
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <hero.icon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-primary mb-2">{hero.title}</h1>
              <div className="inline-flex items-center bg-blue-100 text-primary text-sm font-medium px-3 py-1 rounded-full">
                {hero.badge}
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-600 max-w-4xl leading-relaxed mb-8">
            {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {hero.buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className={`inline-flex items-center justify-center px-8 py-4 font-medium rounded-lg transition-all duration-200 legal-button ${
                  button.variant === 'primary'
                    ? 'bg-black text-primary-foreground hover:bg-gray-800 shadow-lg hover:shadow-xl'
                    : 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                {button.icon && <button.icon className="w-5 h-5 mr-2" />}
                {button.text}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <mainContent.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">{mainContent.title}</h2>
                </div>

                <div className="prose max-w-none">
                  {mainContent.description.map((paragraph, index) => (
                    <p key={index} className="text-base text-gray-700 leading-relaxed mb-5">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Professional Areas Section */}
              <div className="bg-white rounded-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <professionalAreas.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">{professionalAreas.title}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {professionalAreas.areas.map((area, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <area.icon className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm font-medium text-primary">{area.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Card */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <sidebar.contact.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {sidebar.contact.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {sidebar.contact.description}
                    </p>
                    {sidebar.contact.buttons.map((button, index) => (
                      <Link
                        key={index}
                        href={button.href}
                        className={`block w-full text-center py-3 rounded-lg font-medium transition-colors mb-3 ${
                          button.variant === 'primary'
                            ? 'bg-black text-white hover:bg-gray-800'
                            : 'bg-white text-primary border-2 border-primary hover:bg-blue-50'
                        }`}
                      >
                        {button.icon && <button.icon className="w-5 h-5 mr-2 inline-block" />}
                        {button.text}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Specialties Card */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <sidebar.specialties.icon className="w-6 h-6 text-primary mr-2" />
                    <h3 className="text-lg font-bold text-primary">
                      {sidebar.specialties.title}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {sidebar.specialties.items.map((item, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Related Areas Card */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-4">
                    {sidebar.relatedAreas.title}
                  </h3>
                  <div className="space-y-2">
                    {sidebar.relatedAreas.links.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        className="block text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {link.text}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            {services.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.items.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              {cta.heading.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              {cta.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {cta.buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  className={`inline-flex items-center justify-center px-8 py-4 font-medium rounded-lg transition-all duration-200 legal-button ${
                    button.variant === 'primary'
                      ? 'bg-black text-primary-foreground hover:bg-gray-800 shadow-lg hover:shadow-xl'
                      : 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  {button.icon && <button.icon className="w-5 h-5 mr-2" />}
                  {button.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
