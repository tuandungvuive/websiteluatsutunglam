import { 
  Scale, 
  Calendar,
  FileText,
  Users,
  CheckCircle,
  Phone,
  Mail,
  BriefcaseBusiness,
  ArrowLeft,
  Handshake,
  Building,
  ShieldCheck,
  BookOpen,
  Heart,
} from 'lucide-react';
import { servicesData } from './constants';

// Activity Page Data
export const activityData = {
  hero: {
    badge: {
      icon: Scale,
      text: "Văn phòng Luật sư Tùng Lâm"
    },
    heading: {
      title: "Hoạt động hành nghề tại",
      subtitle: "Văn phòng Luật sư Tùng Lâm"
    },
    description: "Văn phòng Luật sư Tùng Lâm cung cấp các dịch vụ pháp lý toàn diện trên nhiều lĩnh vực pháp lý nhà nước Việt Nam. Văn phòng của chúng tôi kết hợp kiến thức pháp lý sâu rộng với hiểu biết thực tế về kinh doanh để mang lại kết quả vượt trội cho khách hàng của chúng tôi.",
    buttons: [
      {
        href: "/contact",
        text: "Đặt lịch hẹn",
        icon: Calendar,
        variant: "primary" as const
      },
      {
        href: "/contact",
        text: "Gặp gỡ đội ngũ chúng tôi",
        variant: "secondary" as const
      }
    ]
  },
  services: {
    badge: {
      icon: FileText,
      text: "Lĩnh vực hành nghề"
    },
    heading: {
      title: "Tổng quan về hoạt động hành nghề"
    },
    description: "Văn phòng chúng tôi cung cấp đầy đủ các dịch vụ pháp lý được thiết kế để đáp ứng các nhu cầu đa dạng của cá nhân, gia đình và doanh nghiệp. Mỗi lĩnh vực hành nghề đều được hỗ trợ bởi luật sư có chuyên môn sâu và thành tích thành công đã được chứng minh.",
    practiceAreas: servicesData.services
  },
  whyChooseUs: {
    heading: {
      title: "Tại sao bạn nên chọn văn phòng Luật sư Tùng Lâm"
    },
    description: "Cách tiếp cận toàn diện, thành tích đã được chứng minh và cam kết phục vụ khách hàng của chúng tôi khiến chúng tôi trở thành sự lựa chọn đúng đắn cho nhu cầu pháp lý của bạn trên mọi lĩnh vực hành nghề.",
    features: [
      {
        icon: Scale,
        title: "12 năm kinh nghiệm hành nghề",
        description: "Cả thập kỷ xây dựng kinh nghiệm pháp lý kết hợp trên mọi lĩnh vực thực hành với kết quả đã được chứng minh."
      },
      {
        icon: Users,
        title: "Đặt khách hàng làm trọng tâm",
        description: "Sự quan tâm cá nhân và các chiến lược pháp lý được thiết kế riêng theo nhu cầu của từng khách hàng."
      },
      {
        icon: CheckCircle,
        title: "Kết quả minh bạch",
        description: "Kết quả thành công và khách hàng hài lòng với kết quả đạt được ở các vụ việc đã giải quyết."
      },
      {
        icon: Phone,
        title: "Hỗ trợ 24/7",
        description: "Luôn sẵn sàng hỗ trợ khi bạn cần tư vấn pháp lý, bao gồm cả tư vấn khẩn cấp."
      }
    ]
  },
  cta: {
    heading: {
      title: "BẠN CẦN TƯ VẤN/ GIẢI QUYẾT VẤN ĐỀ PHÁP LÝ ?"
    },
    description: "Đừng chần chừ để nhận được sự trợ giúp pháp lý mà bạn cần. Văn phòng chúng tôi sẵn sàng cung cấp hướng dẫn chuyên môn và sự đại diện tích cực mà bạn xứng đáng được hưởng. Liên hệ với chúng tôi ngay hôm nay để được tư vấn.",
    buttons: [
      {
        href: "tel:0938571549",
        text: "0938571549 - Luật sư Lê Song Tùng",
        icon: Phone,
        variant: "primary" as const
      },
      {
        href: "/contact",
        text: "Đặt lịch hẹn tư vấn pháp lý",
        icon: Mail,
        variant: "secondary" as const
      }
    ]
  }
};

// Corporate Law Page Data
export const corporateLawData = {
  backLink: {
    href: "/activity",
    text: "Quay lại trang hoạt động hành nghề",
    icon: ArrowLeft
  },
  hero: {
    icon: BriefcaseBusiness,
    title: "Luật Doanh nghiệp",
    badge: "12+ Năm kinh nghiệm",
    description: "Dịch vụ pháp lý toàn diện cho doanh nghiệp thuộc mọi quy mô, từ các công ty khởi nghiệp đến các công ty/ doanh nghiệp. Văn phòng của chúng tôi cung cấp tư vấn pháp lý chiến lược, giúp doanh nghiệp vượt qua mọi trường pháp lý phức tạp và đạt được mục tiêu thương mại.",
    buttons: [
      {
        href: "tel:0938571549",
        text: "Đặt lịch hẹn",
        icon: Phone,
        variant: "primary" as const
      },
      {
        href: "/contact",
        text: "Tham khảo trang dịch vụ hành nghề",
        variant: "secondary" as const
      }
    ]
  },
  mainContent: {
    icon: BriefcaseBusiness,
    title: "Luật Doanh nghiệp",
    description: [
      "Văn phòng của chúng tôi cung cấp tư vấn pháp lý chiến lược, giúp doanh nghiệp vượt qua mọi trường pháp lý phức tạp, cấu trúc giao dịch và đạt được mục tiêu thương mại. Chúng tôi hợp tác chặt chẽ với các doanh nhân, công ty đã thành lập và nhà đầu tư để cung cấp các giải pháp thiết thực hỗ trợ tăng trưởng kinh doanh đồng thời giảm thiểu rủi ro pháp lý.",
      "Với hơn 12 năm kinh nghiệm trong lĩnh vực luật doanh nghiệp, văn phòng của chúng tôi đã xử lý thành công hơn 500 vụ việc doanh nghiệp, từ việc thành lập doanh nghiệp đơn giản đến các giao dịch phức tạp trị giá hàng tỷ đô la. Chúng tôi hiểu rằng mỗi doanh nghiệp đều có những đặc thù riêng, và chúng tôi điều chỉnh phương pháp tiếp cận để đáp ứng nhu cầu và mục tiêu cụ thể của từng khách hàng.",
      "Văn phòng của chúng tôi luôn cập nhật các quy định và xu hướng thị trường đang thay đổi, đảm bảo khách hàng nhận được tư vấn vừa hợp lý về mặt pháp lý vừa thực tiễn về mặt thương mại. Chúng tôi tự hào xây dựng mối quan hệ lâu dài với khách hàng, đóng vai trò là cố vấn đáng tin cậy trong suốt vòng đời kinh doanh của họ."
    ]
  },
  professionalAreas: {
    title: "Lĩnh vực chuyên môn",
    icon: BriefcaseBusiness,
    areas: [
      { icon: CheckCircle, title: "Hình thành & cấu trúc doanh nghiệp" },
      { icon: Handshake, title: "Soạn thảo và đàm phán hợp đồng" },
      { icon: Building, title: "Mua bán và sáp nhập" },
      { icon: ShieldCheck, title: "Quản trị doanh nghiệp" },
      { icon: FileText, title: "Pháp chế Doanh nghiệp" },
      { icon: BookOpen, title: "Tuân thủ quy định" },
      { icon: CheckCircle, title: "Luật sở hữu trí tuệ" },
      { icon: Handshake, title: "Tuân thủ luật lao động" },
      { icon: Building, title: "Soạn thảo hợp đồng" },
      { icon: ShieldCheck, title: "Tư vấn đại hạn" }
    ]
  },
  sidebar: {
    contact: {
      icon: Phone,
      title: "Bạn cần trợ giúp về Luật doanh nghiệp?",
      description: "Hãy liên hệ với chúng tôi ngay hôm nay để đặt lịch hẹn tư vấn về vấn đề pháp lý của bạn.",
      buttons: [
        {
          href: "tel:0938571549",
          text: "0938571549",
          icon: Phone,
          variant: "primary" as const
        },
        {
          href: "/contact",
          text: "Email chúng tôi",
          icon: Mail,
          variant: "secondary" as const
        }
      ]
    },
    specialties: {
      title: "Chuyên môn phụ",
      icon: FileText,
      items: [
        {
          title: "Thành lập doanh nghiệp",
          description: "Chọn loại hình thành tạo và tăng trưởng cho doanh nghiệp mới"
        },
        {
          title: "Mua bán và sáp nhập",
          description: "Đại diện bên mua và bên bán trong các vụ sáp nhập và mua lại"
        },
        {
          title: "Quản trị doanh nghiệp",
          description: "Tư vấn hội đồng quản trị, chương trình tuân thủ và quản lý rủi ro"
        },
        {
          title: "Soạn thảo và đàm phán hợp đồng",
          description: "Tư vấn hội đồng quản trị, chương trình tuân thủ và quản lý rủi ro"
        }
      ]
    },
    relatedAreas: {
      title: "Các lĩnh vực liên quan",
      links: [
        {
          href: "/services/real-estate",
          text: "Luật Đất đai"
        },
        {
          href: "/services/labor",
          text: "Luật Lao động"
        }
      ]
    }
  },
  services: {
    title: "Dịch vụ luật Doanh nghiệp tại văn phòng chúng tôi",
    items: [
      {
        icon: BriefcaseBusiness,
        title: "Thành lập doanh nghiệp",
        description: "Chiến lược hình thành, tài trợ và tăng trưởng cho doanh nghiệp mới"
      },
      {
        icon: Handshake,
        title: "Mua bán & sáp nhập",
        description: "Đại diện bên mua và bên bán trong các vụ sáp nhập và mua lại"
      },
      {
        icon: ShieldCheck,
        title: "Hợp đồng và thị trường",
        description: "Chào bán công khai và riêng tư, tuân thủ hợp đồng và quản hệ nhà đầu tư"
      },
      {
        icon: FileText,
        title: "Pháp chế doanh nghiệp",
        description: "Tư vấn hội đồng quản trị, chương trình tuân thủ và quản lý rủi ro"
      }
    ]
  }
};

// Family Law Page Data
export const familyLawData = {
  backLink: {
    href: "/activity",
    text: "Quay lại trang hoạt động hành nghề",
    icon: ArrowLeft
  },
  hero: {
    icon: Heart,
    title: "Luật Hôn nhân & Gia đình",
    badge: "12+ Năm kinh nghiệm",
    description: "Dịch vụ pháp lý toàn diện về hôn nhân và gia đình, bao gồm ly hôn, phân chia tài sản, quyền nuôi con và các thỏa thuận trước hôn nhân. Văn phòng của chúng tôi cung cấp tư vấn pháp lý tế nhị và hỗ trợ trong những tình huống gia đình phức tạp nhất.",
    buttons: [
      {
        href: "tel:0938571549",
        text: "Đặt lịch hẹn",
        icon: Phone,
        variant: "primary" as const
      },
      {
        href: "/contact",
        text: "Tham khảo trang dịch vụ hành nghề",
        variant: "secondary" as const
      }
    ]
  },
  mainContent: {
    icon: Heart,
    title: "Luật Hôn nhân & Gia đình",
    description: [
      "Văn phòng của chúng tôi cung cấp dịch vụ pháp lý toàn diện về luật hôn nhân và gia đình, đại diện cho các cá nhân trong những khoảnh khắc quan trọng của cuộc đời họ. Chúng tôi hiểu rằng các vấn đề gia đình thường phức tạp về mặt cảm xúc và pháp lý, vì vậy chúng tôi cung cấp sự hỗ trợ tế nhị và hiệu quả để giúp khách hàng vượt qua những thời điểm khó khăn.",
      "Với hơn 12 năm kinh nghiệm trong lĩnh vực luật hôn nhân và gia đình, văn phòng của chúng tôi đã hỗ trợ thành công hàng trăm khách hàng trong các vấn đề từ ly hôn đơn giản đến tranh chấp quyền nuôi con phức tạp. Chúng tôi hiểu rõ tác động sâu sắc mà các vấn đề gia đình có thể gây ra và cam kết cung cấp lời khuyên pháp lý nhạy cảm nhưng thực tế.",
      "Đội ngũ luật sư của chúng tôi kết hợp chuyên môn pháp lý với sự thấu hiểu sâu sắc về động lực gia đình, đảm bảo rằng chúng tôi không chỉ giải quyết các vấn đề pháp lý mà còn xem xét các tác động cảm xúc và thực tế dài hạn đối với tất cả các bên liên quan. Chúng tôi tự hào về phương pháp tiếp cận toàn diện để hỗ trợ khách hàng đạt được giải pháp công bằng và bền vững."
    ]
  },
  professionalAreas: {
    title: "Lĩnh vực chuyên môn",
    icon: Users,
    areas: [
      { icon: FileText, title: "Ly hôn phân chia tài sản" },
      { icon: Users, title: "Tranh chấp quyền nuôi con" },
      { icon: FileText, title: "Thỏa thuận trước hôn nhân" },
      { icon: ShieldCheck, title: "Ly hôn và ly thân hợp pháp" },
      { icon: FileText, title: "Hỗ trợ và cấp dưỡng con cái" },
      { icon: Users, title: "Quyền thăm nom con cái" },
      { icon: FileText, title: "Nhận con nuôi" },
      { icon: ShieldCheck, title: "Bạo lực gia đình" },
      { icon: FileText, title: "Thỏa thuận ly hôn" },
      { icon: Users, title: "Giải quyết tranh chấp gia đình" }
    ]
  },
  sidebar: {
    contact: {
      icon: Phone,
      title: "Bạn cần trợ giúp về Luật hôn nhân & gia đình?",
      description: "Hãy liên hệ với chúng tôi ngay hôm nay để đặt lịch hẹn tư vấn về vấn đề pháp lý gia đình của bạn.",
      buttons: [
        {
          href: "tel:0938571549",
          text: "0938571549",
          icon: Phone,
          variant: "primary" as const
        },
        {
          href: "/contact",
          text: "Email chúng tôi",
          icon: Mail,
          variant: "secondary" as const
        }
      ]
    },
    specialties: {
      title: "Chuyên môn phụ",
      icon: FileText,
      items: [
        {
          title: "Ly hôn phân chia tài sản",
          description: "Phân chia tài sản phức tạp liên quan đến tài sản trước hôn nhân"
        },
        {
          title: "Tranh chấp quyền nuôi con",
          description: "Các trường hợp tranh chấp quyền nuôi con và quyền thăm nom"
        },
        {
          title: "Thỏa thuận trước hôn nhân",
          description: "Những văn bản pháp lý mà các cặp vợ chồng hoặc các cặp đối tác kết hôn"
        },
        {
          title: "Ly hôn và ly thân hợp pháp",
          description: "Giải quyết tranh chấp thay thế cho việc ly hôn thân thiện"
        }
      ]
    },
    relatedAreas: {
      title: "Các lĩnh vực liên quan",
      links: [
        {
          href: "/services/civil",
          text: "Luật Dân sự"
        },
        {
          href: "/services/real-estate",
          text: "Luật Đất đai"
        }
      ]
    }
  },
  services: {
    title: "Dịch vụ luật Hôn nhân & Gia đình tại văn phòng chúng tôi",
    items: [
      {
        icon: FileText,
        title: "Ly hôn phân chia tài sản",
        description: "Phân chia tài sản phức tạp liên quan đến tài sản trước hôn nhân"
      },
      {
        icon: Users,
        title: "Tranh chấp quyền nuôi con",
        description: "Các trường hợp tranh chấp quyền nuôi con và quyền thăm nom"
      },
      {
        icon: FileText,
        title: "Thỏa thuận trước hôn nhân",
        description: "Những văn bản pháp lý mà các cặp vợ chồng hoặc các cặp đối tác kết hôn"
      },
      {
        icon: ShieldCheck,
        title: "Ly hôn và ly thân hợp pháp",
        description: "Giải quyết tranh chấp thay thế cho việc ly hôn thân thiện"
      }
    ]
  }
};
