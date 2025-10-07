"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactFormSchema } from '@/lib/schema/zodschema';
import { contactData } from '@/lib/utils/constants';

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactFormSection() {
  const { badge, heading, contactInfo, form: formData } = contactData;

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <section className="py-12 lg:py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section - Contact Info */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
                <badge.icon className="w-4 h-4 text-primary mr-2" />
                <span className="text-primary text-sm font-medium">
                  {badge.text}
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {heading.title}
              </h2>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                {heading.subtitle}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {heading.description}
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-16 h-16 bg-blue-100 border border-blue-200 rounded-full flex items-center justify-center mr-5 flex-shrink-0">
                    {React.createElement(item.icon, { className: "w-8 h-8 text-primary" })}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base mb-1">
                      {item.title}
                    </h3>
                    <div className="text-sm text-gray-600">
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="mb-1">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {contactData.buttons.map((button, index) => (
                <a 
                  key={index}
                  href={button.href}
                 className={`inline-flex items-center justify-center px-8 py-4 font-medium rounded-lg transition-all duration-200 legal-button ${
                    button.variant === 'primary' 
                      ? 'bg-black text-primary-foreground hover:bg-gray-800 shadow-lg hover:shadow-xl' 
                      : 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  {button.icon && React.createElement(button.icon, { className: "w-5 h-5 mr-2" })}
                  {button.text}
                </a>
              ))}
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <Card className="shadow-lg border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                {formData.title}
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Điền thông tin và chúng tôi sẽ liên hệ lại với bạn sớm nhất có thể.
              </p>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">
                        {formData.fields.name.label}
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Nhập họ và tên của bạn" 
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">
                        {formData.fields.email.label}
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <formData.submitButton.icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input 
                            type="email" 
                            placeholder={formData.fields.email.placeholder} 
                            className="pl-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">
                        {formData.fields.phone.label}
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <badge.icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input 
                            type="tel" 
                            placeholder={formData.fields.phone.placeholder} 
                            className="pl-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">
                        {formData.fields.message.label}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={formData.fields.message.placeholder}
                          className="min-h-[100px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm" />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  <formData.submitButton.icon className="w-5 h-5 mr-2" />
                  {formData.submitButton.text}
                </Button>
              </form>
            </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
