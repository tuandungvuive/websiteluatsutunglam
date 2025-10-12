"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { 
  Card,
} from "@/components/ui/card";
import { lawyers, carouselImages } from "@/lib/utils/lawyers";
import { activityData } from '@/lib/utils/activity';

export default function LawyersPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const { cta } = activityData;
  
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Gặp gỡ đội ngũ nhân sự của chúng tôi
          </h1>
          <p className="text-lg text-center mx-auto max-w-4xl mb-10">
           Với luật sư giỏi chuyên môn, giàu kinh nghiệm, tận tâm và tuân thủ đạo đức nghề nghiệp luật sư; Văn phòng luật sư Tùng Lâm đã tạo được niềm tin và sự hài lòng cho Quý Khách hàng khi đến với Văn phòng.
          </p>
          
          {/* Featured Carousel */}
          <div className="relative mt-10 max-w-5xl mx-auto">
            <Carousel 
              className="w-full"
              opts={{
                loop: true
              }}
              setApi={(api) => {
                api?.on("select", () => {
                  setActiveSlide(api.selectedScrollSnap());
                });
              }}
            >
              <CarouselContent>
                {carouselImages.map((image) => (
                  <CarouselItem key={image.id}>
                    <div className="h-[300px] md:h-[400px] relative rounded-lg overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
            <div className="flex justify-center mt-4">
              <div className="flex space-x-2">
                {carouselImages.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full cursor-pointer ${
                      index === activeSlide ? "bg-purple-500" : "bg-gray-300"
                    }`}
                    onClick={() => {
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-primary">
            Đội Ngũ Nhân Sự Của Chúng Tôi
          </h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">
            Đội ngũ luật sư giàu kinh nghiệm và chuyên nghiệp, sẵn sàng hỗ trợ mọi vấn đề pháp lý của quý khách.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lawyers.map((lawyer) => (
              <Card key={lawyer.id} className="group hover:shadow-lg transition-shadow duration-300 h-full flex flex-col overflow-hidden p-0">
                <div className="aspect-3/2 relative">
                  <Image
                    src="/no_image.jpg"
                    alt={lawyer.name}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-50 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              {cta.heading.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              {cta.description}
            </p>

            {/* CTA Buttons */}
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