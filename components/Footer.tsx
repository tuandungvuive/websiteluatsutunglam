import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { quickLinks, legalServices, contactInfo } from '@/lib/utils/navigation';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Văn phòng Luật sư Tùng Lâm */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src="/logo.jpg" 
                alt="Văn phòng Luật sư Tùng Lâm Logo" 
                width={60} 
                height={60}
                className="rounded-lg object-cover"
              />
              <h3 className="text-lg font-bold text-gray-800">
                Văn phòng Luật sư Tùng Lâm
              </h3>
            </div>
            
            <p className="text-gray-600 text-base leading-relaxed">
              {contactInfo.description}
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4 pt-2">
              <Link 
                href="#" 
                className="hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <Image 
                  src="/Facebook_icon.jpg" 
                  alt="Facebook" 
                  width={32} 
                  height={32}
                  className="rounded"
                />
              </Link>
              <Link 
                href="#" 
                className="hover:opacity-80 transition-opacity"
                aria-label="Messenger"
              >
                <Image 
                  src="/Messenger_logo.jpg" 
                  alt="Messenger" 
                  width={32} 
                  height={32}
                  className="rounded"
                />
              </Link>
              <Link 
                href="#" 
                className="hover:opacity-80 transition-opacity"
                aria-label="Zalo"
              >
                <Image 
                  src="/Icon_of_Zalo.jpg" 
                  alt="Zalo" 
                  width={32} 
                  height={32}
                  className="rounded"
                />
              </Link>
              <Link 
                href="#" 
                className="hover:opacity-80 transition-opacity"
                aria-label="YouTube"
              >
                <Image 
                  src="/YouTube_icon.jpg" 
                  alt="YouTube" 
                  width={32} 
                  height={32}
                  className="rounded"
                />
              </Link>
            </div>

            {/* Contact Information */}
            <div className="pt-4 space-y-2">
              <div>
                <h4 className="font-semibold text-gray-800 text-base">Địa chỉ:</h4>
                <p className="text-gray-600 text-base">{contactInfo.address}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 text-base">Contact:</h4>
                <p className="text-gray-600 text-base">{contactInfo.lawyer} {contactInfo.phone}</p>
                <p className="text-gray-600 text-base">{contactInfo.assistant}</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="ml-32">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 text-base transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hoạt động hành nghề */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Hoạt động hành nghề</h3>
            <ul className="space-y-2">
              {legalServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href}
                    className="text-gray-600 hover:text-blue-600 text-base transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-base">
              © 2024 Relume. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link 
                href="/privacy-policy" 
                className="text-gray-600 hover:text-blue-600 text-base transition-colors underline"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-of-service" 
                className="text-gray-600 hover:text-blue-600 text-base transition-colors underline"
              >
                Terms of Service
              </Link>
              <Link 
                href="/cookies-settings" 
                className="text-gray-600 hover:text-blue-600 text-base transition-colors underline"
              >
                Cookies Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

