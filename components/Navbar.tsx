import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { mainNavigation } from '@/lib/utils/navigation';

export const Navbar = () => {
  return (
    <>
      {/* Header section with logo and title */}
      <div className="bg-sky-200 py-6">
        <div className="container mx-auto px-4 flex items-center justify-center gap-6">
          <div className="flex items-center justify-center">
            <Image 
              src="/logo.jpg" 
              alt="Logo" 
              width={120} 
              height={120}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-2">
              ĐOÀN LUẬT SƯ THÀNH PHỐ HỒ CHÍ MINH
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-600">
              VĂN PHÒNG LUẬT SƯ TÙNG LÂM
            </h2>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="bg-white shadow-md border-b">
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between h-16">
            {/* Left side - Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center transform translate-x-12">
                <Image 
                  src="/logo.jpg" 
                  alt="Logo" 
                  width={40} 
                  height={40}
                  className="rounded object-cover"
                />
              </Link>
            </div>

            {/* Center - Navigation Menu */}
            <div className="flex-1 flex justify-center">
              <NavigationMenu viewport={false}>
                <NavigationMenuList className="flex items-center space-x-1">
                  {mainNavigation.map((item, index) => (
                    <NavigationMenuItem key={index}>
                      {item.children ? (
                        <>
                          <NavigationMenuTrigger className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium">
                            {item.label}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <div className="p-4 w-64">
                              {item.children.map((child, childIndex) => (
                                <NavigationMenuLink key={childIndex} asChild>
                                  <Link 
                                    href={child.href} 
                                    className="block px-4 py-2 hover:bg-gray-100 rounded text-gray-700 hover:text-blue-600 transition-colors"
                                  >
                                    {child.label}
                                  </Link>
                                </NavigationMenuLink>
                              ))}
                            </div>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <NavigationMenuLink asChild>
                          <Link 
                            href={item.href} 
                            className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                          >
                            {item.label}
                          </Link>
                        </NavigationMenuLink>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
