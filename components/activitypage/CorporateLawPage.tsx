"use client";

import ServiceDetailPage from './ServiceDetailPage';
import { corporateLawData } from '@/lib/utils/activity';

export default function CorporateLawPage() {
  return <ServiceDetailPage serviceData={corporateLawData} />;
}
