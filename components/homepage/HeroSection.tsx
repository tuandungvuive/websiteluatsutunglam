"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { heroData } from '@/lib/utils/constants';

export default function HeroSection() {
  const { badge, heading, buttons, features } = heroData;

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-secondary border border-primary/20 rounded-full w-fit">
              <badge.icon className="w-5 h-5 text-primary mr-3" />
              <span className="text-blue-600  text-sm font-medium">
                {badge.text}
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-4xl font-bold text-foreground leading-tight legal-heading">
                {heading.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed legal-text max-w-2xl">
                {heading.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              {buttons.map((button, index) => (
                <Link 
                  key={index}
                  href={button.href}
                  className={`inline-flex items-center justify-center px-8 py-4 font-medium rounded-lg transition-all duration-200 legal-button ${
                    button.variant === 'primary' 
                      ? 'bg-black text-primary-foreground hover:bg-gray-800 shadow-lg hover:shadow-xl' 
                      : 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  {button.icon && <button.icon className="w-5 h-5 mr-3" />}
                  {button.text}
                </Link>
              ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 gap-8 pt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-18 h-18 bg-secondary border border-primary/20 rounded-lg flex items-center justify-center mr-5 flex-shrink-0">
                    <feature.icon className="w-9 h-9 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-2xl font-bold text-foreground leading-tight legal-heading">{feature.title}</h3>
                    <p className="text-m text-muted-foreground legal-text">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="bg-muted rounded-2xl aspect-auto flex items-center justify-center overflow-hidden shadow-2xl">
              <Image 
                src="/no_image.jpg" 
                alt="Hình ảnh sẽ được thêm vào sau" 
                width={480}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

