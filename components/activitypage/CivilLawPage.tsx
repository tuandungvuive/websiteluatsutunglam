"use client";

import ServiceDetailPage from './ServiceDetailPage';
import { civilLawData } from '@/lib/utils/activity';

export default function CivilLawPage() {
  return <ServiceDetailPage serviceData={civilLawData} />;
}
