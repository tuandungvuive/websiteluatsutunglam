import * as z from 'zod';

// Cấu trúc form liên hệ đơn giản
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

// Cấu trúc form luật sư chi tiết
export const legalConsultationSchema = z.object({
  // Thông tin cá nhân
  name: z.string().min(2, {
    message: "Tên phải có ít nhất 2 ký tự.",
  }),
  email: z.string().email({
    message: "Vui lòng nhập địa chỉ email hợp lệ.",
  }),
  phone: z.string().min(10, {
    message: "Số điện thoại phải có ít nhất 10 ký tự.",
  }),
  
  // Thông tin công ty (tùy chọn)
  company: z.string().optional(),
  
  // Thông tin địa chỉ
  address: z.string().optional(),
  district: z.string().optional(),
  city: z.string().optional(),
  
  // Chi tiết vụ việc
  lawType: z.enum(['criminal', 'civil', 'family', 'business', 'labor', 'land'])
    .describe("Loại hình Luật"),
  urgency: z.enum(['urgent', 'high', 'medium', 'low'])
    .describe("Mức độ khẩn cấp"),
  caseTitle: z.string().min(5, {
    message: "Tiêu đề vụ việc phải có ít nhất 5 ký tự",
  }),
  message: z.string().min(20, {
    message: "Mô tả chi tiết phải có ít nhất 20 ký tự.",
  }),
  
  // Liên hệ ưu tiên
  contactMethod: z.enum(['phone', 'email', 'video', 'meeting'])
    .describe("Phương thức liên hệ"),
  bestTime: z.enum(['morning', 'afternoon', 'evening'])
    .describe("Thời gian liên hệ"),
  
  // Chấp thuận
  consent: z.boolean().refine(val => val === true, {
    message: "Bạn cần đồng ý với các điều khoản để gửi form",
  }),
  newsletter: z.boolean().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type LegalConsultationData = z.infer<typeof legalConsultationSchema>;