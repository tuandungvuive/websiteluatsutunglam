import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

export const contactData = {
  hero: {
    title: "Liên hệ Văn phòng Luật sư Tùng Lâm",
    description: "Bạn đã sẵn sàng thảo luận về vấn đề pháp lý của bạn? Chúng tôi luôn ở đây để giúp bạn. Nhiều cách để kết nối với văn phòng của chúng tôi để sắp xếp lịch hẹn tư vấn."
  },
  contactOptions: {
    title: "Nhiều cách để liên hệ với chúng tôi",
    description: "Chọn phương thức liên hệ phù hợp nhất với bạn. Chúng tôi cam kết phản hồi nhanh chóng và cung cấp thông tin bạn cần.",
    options: [
      {
        icon: Phone,
        title: "SĐT liên hệ",
        description: "Nói chuyện trực tiếp với chúng tôi",
        actionText: "0938571549",
        actionHref: "https://zalo.me/0938571549",
        buttonText: "0938571549"
      },
      {
        icon: Mail,
        title: "Email của chúng tôi",
        description: "Gửi yêu cầu đến chúng tôi",
        actionText: "vanphongluatsutunglam@gmail.com",
        actionHref: "mailto:vanphongluatsutunglam@gmail.com",
        buttonText: "Gửi Mail"
      },
      {
        icon: MapPin,
        title: "Địa chỉ văn phòng",
        description: "Hãy đến văn phòng của chúng tôi",
        actionText: "Xem bản đồ",
        actionHref: "https://www.google.com/maps/place/399+B%C3%ACnh+L%E1%BB%A3i,+Ph%C6%B0%E1%BB%9Dng+13,+B%C3%ACnh+Th%E1%BA%A1nh,+H%E1%BB%93+Ch%C3%AD+Minh,+Vietnam/@10.8361195,106.6992427,17z/data=!3m1!4b1!4m6!3m5!1s0x31752860ee3d558b:0xc12f1fb4201a417b!8m2!3d10.8361142!4d106.701823!16s%2Fg%2F11j8gz_yc5?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D",
        buttonText: "Địa chỉ"
      },
      {
        icon: MessageSquare,
        title: "Trò chuyện trực tiếp",
        description: "Trò chuyện với văn phòng chúng tôi",
        actionText: "Bắt đầu trò chuyện",
        actionHref: "#chat",
        buttonText: "Bắt đầu trò chuyện"
      }
    ]
  }
};
export const CONTACT_INFO = {
  company: {
    name: "Văn phòng Luật sư Tùng Lâm",
    address: "399 Bình Lợi, phường Bình Lợi Trung,",
    city: "Thành phố Hồ Chí Minh",
  },
  email: {
    primary1: "ls_songtung@yahoo.com - Luật sư Lê Song Tùng",
    primary2: "vanphongluatsutunglam@gmail.com - Văn phòng Luật sư Tùng Lâm",
    support: "tuandungvule@gmail.com - Cộng sự Lê Anh Tuấn Dũng",
  },
  phone: {
    primary: "0938571549",
    label: "0938571549 (Số Zalo)",
    phoneowner: "Luật sư Lê Song Tùng -Trưởng văn phòng",
    additional: "0932018266 (Số Zalo) - Bà Lê Thị Liên",
  },
  responseTime: {
    label: "Dịch vụ thường trả lời trong vòng",
    time: "24 giờ",
  },
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.946366436094!2d106.71416347457314!3d10.811717558708736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529b6a9d5b70d%3A0x6c6e1c3e8a8c9b0a!2s399%20%C4%90.%20B%C3%ACnh%20L%E1%BB%A3i%2C%20Ph%C6%B0%E1%BB%9Dng%2013%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vi%E1%BB%87t%20Nam!5e0!3m2!1svi!2s!4v1703769600000!5m2!1svi!2s",
} as const;