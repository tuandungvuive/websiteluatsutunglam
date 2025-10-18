"use client";

import ServiceDetailPage from './ServiceDetailPage';
import { realEstateLawData } from '@/lib/utils/activity';

export default function RealEstateLawPage() {
  return <ServiceDetailPage serviceData={realEstateLawData} />;
}
