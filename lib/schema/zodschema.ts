import * as z from 'zod';

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Tên phải có ít nhất 2 ký tự.",
  }),
  email: z.string().email({
    message: "Vui lòng nhập địa chỉ email hợp lệ.",
  }),
  phone: z.string().min(10, {
    message: "Số điện thoại phải có ít nhất 10 ký tự.",
  }),
  message: z.string().min(10, {
    message: "Tin nhắn phải có ít nhất 10 ký tự.",
  }),
});

// Newsletter Schema (for future use)
export const newsletterSchema = z.object({
  email: z.string().email({
    message: "Vui lòng nhập địa chỉ email hợp lệ.",
  }),
});

// Appointment Schema (for future use)
export const appointmentSchema = z.object({
  name: z.string().min(2, {
    message: "Tên phải có ít nhất 2 ký tự.",
  }),
  email: z.string().email({
    message: "Vui lòng nhập địa chỉ email hợp lệ.",
  }),
  phone: z.string().min(10, {
    message: "Số điện thoại phải có ít nhất 10 ký tự.",
  }),
  date: z.string().min(1, {
    message: "Vui lòng chọn ngày hẹn.",
  }),
  time: z.string().min(1, {
    message: "Vui lòng chọn giờ hẹn.",
  }),
  service: z.string().min(1, {
    message: "Vui lòng chọn dịch vụ.",
  }),
  message: z.string().optional(),
});

// Type exports
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type NewsletterData = z.infer<typeof newsletterSchema>;
export type AppointmentData = z.infer<typeof appointmentSchema>;