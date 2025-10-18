"use client";

import ServiceDetailPage from './ServiceDetailPage';
import { familyLawData } from '@/lib/utils/activity';

export default function FamilyLawPage() {
  return <ServiceDetailPage serviceData={familyLawData} />;
}
