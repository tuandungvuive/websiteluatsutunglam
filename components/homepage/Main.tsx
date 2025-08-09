"use client";

import React from 'react';
import HeroSection from './HeroSection';
import CoreValuesSection from './CoreValuesSection';
import ServicesSection from './ServicesSection';
import ValuePropositionSection from './ValuePropositionSection';
import BlogSection from './BlogSection';
import ContactFormSection from './FormSection';

export default function Main() {
  return (
    <>
      <HeroSection />
      <CoreValuesSection />
      <ServicesSection />
      <ValuePropositionSection />
      <BlogSection />
      <ContactFormSection />
    </>
  );
};
