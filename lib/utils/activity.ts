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
  ShieldCheck,
  BookOpen,
  Heart,
  Shield,
  Landmark,
  Lightbulb,
  SearchCheck,
  FilePen,
  Home,
  Building2,
  MapPin,
  FileCheck,
  ClipboardList,
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
    description: "Văn phòng Luật sư Tùng Lâm cung cấp dịch vụ pháp lý toàn diện, chuyên cung cấp các giải pháp pháp lý trong khuôn khổ pháp luật Việt Nam. Điểm khác biệt của chúng tôi là sự kết hợp nhuần nhuyễn giữa kiến thức pháp luật chuyên sâu và kinh nghiệm kinh doanh thực tiễn, cam kết mang lại những kết quả vượt trội và tối ưu hóa lợi ích thương mại cho mọi khách hàng.",
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
    description: "Văn phòng chúng tôi cung cấp các dịch vụ pháp lý toàn diện, đáp ứng mọi nhu cầu đa dạng từ cá nhân, gia đình đến doanh nghiệp. Mỗi lĩnh vực hành nghề đều được đảm nhận bởi luật sư chuyên môn sâu, đảm bảo chất lượng dịch vụ ở mức cao nhất.",
    practiceAreas: servicesData.services
  },
  whyChooseUs: {
    heading: {
      title: "Tại sao bạn nên chọn văn phòng Luật sư Tùng Lâm"
    },
    description: "Với cách tiếp cận toàn diện, thành tích đã được chứng minh và cam kết phục vụ khách hàng, chúng tôi là lựa chọn hoàn hảo cho mọi nhu cầu pháp lý của bạn trên mọi lĩnh vực hành nghề.",
    features: [
      {
        icon: Scale,
        title: "12 năm kinh nghiệm hành nghề",
        description: "Cả thập kỷ xây dựng kinh nghiệm pháp lý kết hợp trên mọi lĩnh vực thực hành với kết quả đã được chứng minh."
      },
      {
        icon: Users,
        title: "Khách hàng làm trọng tâm",
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
    description: "Hãy để chúng tôi đồng hành cùng bạn. Chúng tôi cam kết cung cấp sự đại diện pháp lý tận tâm cùng hướng dẫn chuyên sâu mà khách hàng xứng đáng nhận được. Hãy gọi cho chúng tôi ngay để bắt đầu buổi tư vấn.",
    buttons: [
      {
        href: "https://zalo.me/0938571549",
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
    title: "Tham gia tố tụng theo quy định của pháp luật",
    badge: "12+ năm kinh nghiệm hành nghề",
    description: "Văn phòng Luật sư Tùng Lâm cung cấp dịch vụ đại diện và tham gia tố tụng chuyên nghiệp tại các cấp Tòa án và Cơ quan Nhà nước có thẩm quyền. Với kinh nghiệm dày dạn và nắm vững quy định pháp luật, chúng tôi cam kết bảo vệ tối đa quyền và lợi ích hợp pháp của khách hàng theo đúng trình tự và thủ tục do pháp luật quy định.",
    buttons: [
      {
        href: "https://zalo.me/0938571549",
        text: "Đặt lịch hẹn",
        icon: Phone,
        variant: "primary" as const
      },
      {
        href: "/activity",
        text: "Tham khảo trang dịch vụ hành nghề",
        variant: "secondary" as const
      }
    ]
  },
  mainContent: {
    icon: BriefcaseBusiness,
    title: "Tham gia tố tụng theo quy định của pháp luật",
    description: [
      "Tố tụng là trình tự, thủ tục do pháp luật quy định nhằm giải quyết các tranh chấp, vi phạm pháp luật phát sinh trong các lĩnh vực dân sự, hình sự và hành chính tại cơ quan nhà nước có thẩm quyền.",
      "Chủ thể tham gia tố tụng được xác định dựa trên tính chất của quan hệ pháp luật và lĩnh vực pháp luật cụ thể.",
      "Việc tham gia tố tụng của người đại diện của đương sự trong tố tụng dân sự có ý nghĩa rất lớn đối với việc giải quyết các vụ án dân sự, đặc biệt trong trường hợp đương sự không tự thực hiện các quyền và nghĩa vụ tố tụng của mình. Những quy định về người đại diện của đương sự được quy định tại Bộ luật Dân sự năm 2015.",
      "Người đại diện của đương sự tham gia tố tụng dân sự là người thay mặt đương sự thực hiện các quyền, nghĩa vụ tố tụng để bảo vệ quyền và lợi ích hợp pháp cho đương sự trước Tòa án.",
      "Căn cứ Điều 85 của Bộ luật Tố tụng Dân sự năm 2015: “Người đại diện trong tố tụng dân sự bao gồm người đại diện theo pháp luật và người đại diện theo ủy quyền. Người đại diện có thể là cá nhân hoặc pháp nhân theo quy định của Bộ luật Dân sự.”",
      "Dựa vào vào ý chí của đương sự, pháp luật tố tụng dân sự hiện hành chia người đại diện thành hai loại: Người đại diện theo pháp luật và người đại diện theo uỷ quyền. Ngoài ra, người đại diện trong tố tụng dân sự còn có thể do Tòa án chỉ định.",
      "Thông qua đó, Luật sư tại văn phòng Luật sư Tùng Lâm tham gia tố tụng tại Tòa án các cấp với tư cách là:",
      "* Người bào chữa cho người bị tạm giữ, bị can, bị cáo hoặc là Người bảo vệ quyền lợi của người bị hại, nguyên đơn dân sự, bị đơn dân sự, người có quyền lợi, nghĩa vụ liên quan trong vụ án tố tụng.",
      "* Người đại diện hoặc là người bảo vệ quyền, lợi ích hợp pháp của nguyên đơn, bị đơn, người có quyền lợi, nghĩa vụ liên quan trong các vụ án về tranh chấp dân sự, hôn nhân và gia đình, kinh doanh, thương mại, lao động, hành chính, việc về yêu cầu dân sự, hôn nhân và gia đình, kinh doanh, thương mại, lao động và các vụ, việc khác theo quy định của pháp luật."
      
    ]
  },
  professionalAreas: {
    title: "Lĩnh vực hành nghề",
    icon: BriefcaseBusiness,
    areas: [
      { icon: Users, title: "Tố tụng dân sự" },
      { icon: Scale, title: "Tố tụng hình sự" },
      { icon: Landmark, title: "Tố tụng hành chính" },
      { icon: FileText, title: "Tranh chấp hợp đồng" },
      { icon: Lightbulb, title: "Tranh chấp về quyền sở hữu trí tuệ" },
      { icon: SearchCheck, title: "Xem xét, nghiên cứu hồ sơ vụ án" },
      { icon: BookOpen, title: "Tư vấn về các quy trình, thủ tục tố tụng" },
      { icon: Shield, title: "Người bảo vệ quyền và lợi ích hợp pháp của đương sự" },
      { icon: Handshake, title: "Người bào chữa cho quyền và lợi ích hợp pháp của đương sự " },
      { icon: FilePen, title: "Soạn thảo hồ sơ liên quan đến tố tụng" }
    ]
  },
  sidebar: {
    contact: {
      icon: Phone,
      title: "Bạn cần trợ giúp về tố tụng?",
      description: "Hãy liên hệ với chúng tôi ngay hôm nay để đặt lịch hẹn tư vấn về vấn đề pháp lý của bạn.",
      buttons: [
        {
          href: "https://zalo.me/0938571549",
          text: "0938571549",
          icon: Phone,
          variant: "primary" as const
        },
        {
          href: "mailto:vanphongluatsutunglam@gmail.com",
          text: "Email chúng tôi",
          icon: Mail,
          variant: "secondary" as const
        }
      ]
    },
    specialties: {
      title: "Lĩnh vực chuyên môn",
      icon: FileText,
      items: [
        {
          title: "Đại diện tố tụng",
          description: "Trong các vụ án hình sự, dân sự, lao động, thương mại và các tranh chấp về sở hữu trí tuệ."
        },
        {
          title: "Người bào chữa/bảo vệ quyền lợi ",
          description: "Bảo vệ quyền lợi của người bị hại, nguyên đơn dân sự, bị đơn dân sự, người có quyền lợi, nghĩa vụ liên quan trong vụ án tố tụng."
        },
        {
          title: "Người đại diện bảo vệ quyền, lợi ích hợp pháp ",
          description: "Đại diện bảo vệ quyền, lợi ích hợp pháp của nguyên đơn, bị đơn, người có quyền lợi, nghĩa vụ liên quan trong các vụ án tranh chấp/ tố tụng."
        },
        {
          title: "Tư vấn về các quy trình, thủ tục tố tụng",
          description: "Tư vấn về trình tự, thủ tục giải quyết vụ án tố tụng theo quy định của Pháp luật. Giải đáp thắc mắc liên quan đến pháp lý trong các giai đoạn và thủ tục trong Tố tụng."
        }
      ]
    },
    relatedAreas: {
      title: "Các lĩnh vực liên quan",
      links: [
        {
          href: "/services/real-estate",
          text: "Đại diện ngoài tố tụng"
        },
        {
          href: "/services/labor",
          text: "Tư vấn pháp luật"
        }
      ]
    }
  },
  services: {
    title: "Dịch vụ luật tham gia tố tụng tại văn phòng chúng tôi",
    items: [
      {
        icon: BriefcaseBusiness,
        title: "Đại diện tố tụng",
        description: "Trong các vụ án hình sự, dân sự, lao động, thương mại và các tranh chấp về sở hữu trí tuệ."
      },
      {
        icon: Handshake,
        title: "Người bào chữa/bảo vệ quyền lợi",
        description: "Bảo vệ quyền lợi của người bị hại, nguyên đơn dân sự, bị đơn dân sự, người có quyền lợi, nghĩa vụ liên quan trong vụ án tố tụng."
      },
      {
        icon: ShieldCheck,
        title: "Người đại diện bảo vệ quyền, lợi ích hợp pháp",
        description: "Đại diện bảo vệ quyền, lợi ích hợp pháp của nguyên đơn, bị đơn, người có quyền lợi, nghĩa vụ liên quan trong các vụ án tranh chấp/ tố tụng."
      },
      {
        icon: FileText,
        title: "Tư vấn về các quy trình, thủ tục tố tụng",
        description: "Tư vấn về trình tự, thủ tục giải quyết vụ án tố tụng theo quy định của Pháp luật. Giải đáp thắc mắc liên quan đến pháp lý trong các giai đoạn và thủ tục trong Tố tụng."
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
        href: "https://zalo.me/0938571549",
        text: "Đặt lịch hẹn",
        icon: Phone,
        variant: "primary" as const
      },
      {
        href: "/contact",
        text: "Tham khảo trang hoạt động hành nghề",
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
          href: "https://zalo.me/0938571549",
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

// Civil Law Page Data
export const civilLawData = {
  backLink: {
    href: "/activity",
    text: "Quay lại trang hoạt động hành nghề",
    icon: ArrowLeft
  },
  hero: {
    icon: Scale,
    title: "Luật Dân sự",
    badge: "12+ năm kinh nghiệm hành nghề",
    description: "Văn phòng Luật sư Tùng Lâm cung cấp dịch vụ pháp lý toàn diện trong lĩnh vực luật dân sự, bao gồm tranh chấp hợp đồng, bồi thường thiệt hại, quyền sở hữu và các vấn đề dân sự khác. Chúng tôi cam kết bảo vệ quyền và lợi ích hợp pháp của khách hàng với phương pháp tiếp cận chuyên nghiệp và hiệu quả.",
    buttons: [
      {
        href: "https://zalo.me/0938571549",
        text: "Đặt lịch hẹn",
        icon: Phone,
        variant: "primary" as const
      },
      {
        href: "/activity",
        text: "Tham khảo trang dịch vụ hành nghề",
        variant: "secondary" as const
      }
    ]
  },
  mainContent: {
    icon: Scale,
    title: "Dịch vụ tư vấn Luật Dân sự",
    description: [
      "Luật Dân sự là ngành luật điều chỉnh các quan hệ nhân thân và quan hệ tài sản giữa các chủ thể bình đẳng trong xã hội. Đây là một trong những lĩnh vực pháp luật rộng lớn và quan trọng nhất, ảnh hưởng trực tiếp đến đời sống và quyền lợi của mọi công dân.",
      "Văn phòng Luật sư Tùng Lâm chuyên cung cấp các dịch vụ pháp lý trong lĩnh vực luật dân sự, bao gồm tư vấn, soạn thảo hợp đồng, đại diện tố tụng và giải quyết tranh chấp. Với đội ngũ luật sư giàu kinh nghiệm, chúng tôi cam kết mang đến giải pháp pháp lý tối ưu cho mọi vấn đề dân sự của khách hàng.",
      "Chúng tôi hiểu rằng mỗi vụ việc dân sự đều có những đặc thù riêng, vì vậy chúng tôi luôn tiếp cận một cách toàn diện, phân tích kỹ lưỡng từng tình huống để đưa ra lời khuyên pháp lý chính xác và hiệu quả nhất.",
      "Các dịch vụ của chúng tôi bao gồm tư vấn về quyền và nghĩa vụ dân sự, soạn thảo và thẩm định hợp đồng, đại diện khách hàng trong các vụ tranh chấp dân sự, hỗ trợ thương lượng và hòa giải, cũng như đại diện tố tụng tại tòa án các cấp."
    ]
  },
  professionalAreas: {
    title: "Lĩnh vực hành nghề",
    icon: FileText,
    areas: [
      { icon: FileText, title: "Tranh chấp hợp đồng dân sự" },
      { icon: ShieldCheck, title: "Bồi thường thiệt hại" },
      { icon: Users, title: "Quyền sở hữu và tài sản" },
      { icon: BookOpen, title: "Tranh chấp thừa kế" },
      { icon: Handshake, title: "Các giao dịch dân sự" },
      { icon: FilePen, title: "Soạn thảo hợp đồng dân sự" },
      { icon: Scale, title: "Đại diện tố tụng dân sự" },
      { icon: SearchCheck, title: "Thẩm định hợp đồng" },
      { icon: Lightbulb, title: "Tư vấn pháp luật dân sự" },
      { icon: ClipboardList, title: "Hòa giải tranh chấp dân sự" }
    ]
  },
  sidebar: {
    contact: {
      icon: Phone,
      title: "Bạn cần trợ giúp về Luật Dân sự?",
      description: "Hãy liên hệ với chúng tôi ngay hôm nay để đặt lịch hẹn tư vấn về vấn đề dân sự của bạn.",
      buttons: [
        {
          href: "https://zalo.me/0938571549",
          text: "0938571549",
          icon: Phone,
          variant: "primary" as const
        },
        {
          href: "mailto:vanphongluatsutunglam@gmail.com",
          text: "Email chúng tôi",
          icon: Mail,
          variant: "secondary" as const
        }
      ]
    },
    specialties: {
      title: "Lĩnh vực chuyên môn",
      icon: FileText,
      items: [
        {
          title: "Tranh chấp hợp đồng",
          description: "Tư vấn và giải quyết các tranh chấp phát sinh từ hợp đồng dân sự, thương mại."
        },
        {
          title: "Bồi thường thiệt hại",
          description: "Đại diện yêu cầu bồi thường hoặc bảo vệ quyền lợi trong các vụ việc bồi thường."
        },
        {
          title: "Quyền sở hữu",
          description: "Bảo vệ quyền sở hữu tài sản, giải quyết tranh chấp về quyền sở hữu."
        },
        {
          title: "Thừa kế",
          description: "Tư vấn và giải quyết các vấn đề liên quan đến thừa kế tài sản."
        }
      ]
    },
    relatedAreas: {
      title: "Các lĩnh vực liên quan",
      links: [
        {
          href: "/activity/family",
          text: "Luật Hôn nhân & Gia đình"
        },
        {
          href: "/activity/real-estate",
          text: "Luật Đất đai"
        }
      ]
    }
  },
  services: {
    title: "Dịch vụ luật Dân sự tại văn phòng chúng tôi",
    items: [
      {
        icon: FileText,
        title: "Tư vấn pháp luật dân sự",
        description: "Tư vấn về quyền và nghĩa vụ dân sự, các vấn đề pháp lý phát sinh trong đời sống."
      },
      {
        icon: FilePen,
        title: "Soạn thảo hợp đồng",
        description: "Soạn thảo và thẩm định các loại hợp đồng dân sự đảm bảo quyền lợi khách hàng."
      },
      {
        icon: Scale,
        title: "Đại diện tố tụng",
        description: "Đại diện khách hàng tại tòa án trong các vụ tranh chấp dân sự."
      },
      {
        icon: Handshake,
        title: "Hòa giải tranh chấp",
        description: "Hỗ trợ thương lượng và hòa giải để giải quyết tranh chấp một cách hòa bình."
      }
    ]
  }
};

// Real Estate Law Page Data
export const realEstateLawData = {
  backLink: {
    href: "/activity",
    text: "Quay lại trang hoạt động hành nghề",
    icon: ArrowLeft
  },
  hero: {
    icon: Home,
    title: "Luật Đất đai & Bất động sản",
    badge: "12+ năm kinh nghiệm hành nghề",
    description: "Văn phòng Luật sư Tùng Lâm cung cấp dịch vụ pháp lý chuyên sâu về đất đai và bất động sản, bao gồm tư vấn giao dịch, tranh chấp đất đai, thủ tục pháp lý và các vấn đề liên quan. Với kinh nghiệm dày dạn, chúng tôi đồng hành cùng khách hàng trong mọi giao dịch bất động sản một cách an toàn và hiệu quả.",
    buttons: [
      {
        href: "https://zalo.me/0938571549",
        text: "Đặt lịch hẹn",
        icon: Phone,
        variant: "primary" as const
      },
      {
        href: "/activity",
        text: "Tham khảo trang dịch vụ hành nghề",
        variant: "secondary" as const
      }
    ]
  },
  mainContent: {
    icon: Home,
    title: "Dịch vụ tư vấn Luật Đất đai & Bất động sản",
    description: [
      "Luật Đất đai và Bất động sản là lĩnh vực pháp luật điều chỉnh các quan hệ pháp luật về quyền sở hữu, quyền sử dụng đất đai và các giao dịch liên quan đến bất động sản. Đây là một trong những lĩnh vực phức tạp và quan trọng, đòi hỏi sự am hiểu sâu sắc về quy định pháp luật và thực tiễn thị trường.",
      "Văn phòng Luật sư Tùng Lâm chuyên cung cấp các dịch vụ pháp lý toàn diện trong lĩnh vực đất đai và bất động sản. Chúng tôi hỗ trợ khách hàng trong các giao dịch mua bán, chuyển nhượng, cho thuê, thế chấp bất động sản, cũng như giải quyết các tranh chấp phát sinh.",
      "Với đội ngũ luật sư có chuyên môn cao và kinh nghiệm thực tế phong phú, chúng tôi cam kết mang đến cho khách hàng những dịch vụ pháp lý chất lượng cao, đảm bảo tính pháp lý và an toàn cho mọi giao dịch bất động sản.",
      "Các dịch vụ của chúng tôi bao gồm tư vấn về quyền sử dụng đất, thủ tục cấp giấy chứng nhận, tư vấn giao dịch bất động sản, soạn thảo hợp đồng, thẩm định pháp lý bất động sản, giải quyết tranh chấp đất đai và đại diện tố tụng tại tòa án."
    ]
  },
  professionalAreas: {
    title: "Lĩnh vực hành nghề",
    icon: Building2,
    areas: [
      { icon: Home, title: "Mua bán bất động sản" },
      { icon: FileCheck, title: "Thủ tục cấp sổ đỏ" },
      { icon: MapPin, title: "Tranh chấp đất đai" },
      { icon: FilePen, title: "Soạn thảo hợp đồng BĐS" },
      { icon: Building2, title: "Chuyển nhượng quyền sử dụng đất" },
      { icon: ShieldCheck, title: "Thế chấp bất động sản" },
      { icon: SearchCheck, title: "Thẩm định pháp lý BĐS" },
      { icon: FileText, title: "Cho thuê bất động sản" },
      { icon: Scale, title: "Tư vấn quy hoạch & pháp lý" },
      { icon: Lightbulb, title: "Tư vấn đầu tư BĐS" }
    ]
  },
  sidebar: {
    contact: {
      icon: Phone,
      title: "Bạn cần trợ giúp về Luật Đất đai?",
      description: "Hãy liên hệ với chúng tôi ngay hôm nay để đặt lịch hẹn tư vấn về vấn đề bất động sản của bạn.",
      buttons: [
        {
          href: "https://zalo.me/0938571549",
          text: "0938571549",
          icon: Phone,
          variant: "primary" as const
        },
        {
          href: "mailto:vanphongluatsutunglam@gmail.com",
          text: "Email chúng tôi",
          icon: Mail,
          variant: "secondary" as const
        }
      ]
    },
    specialties: {
      title: "Lĩnh vực chuyên môn",
      icon: FileText,
      items: [
        {
          title: "Giao dịch bất động sản",
          description: "Tư vấn và hỗ trợ các giao dịch mua bán, chuyển nhượng bất động sản an toàn."
        },
        {
          title: "Tranh chấp đất đai",
          description: "Giải quyết các tranh chấp về quyền sử dụng đất, ranh giới đất đai."
        },
        {
          title: "Thủ tục pháp lý",
          description: "Hỗ trợ hoàn tất các thủ tục cấp giấy chứng nhận quyền sử dụng đất."
        },
        {
          title: "Thẩm định pháp lý",
          description: "Thẩm định pháp lý dự án, giao dịch bất động sản để đảm bảo an toàn."
        }
      ]
    },
    relatedAreas: {
      title: "Các lĩnh vực liên quan",
      links: [
        {
          href: "/activity/civil",
          text: "Luật Dân sự"
        },
        {
          href: "/activity/corporate",
          text: "Tham gia tố tụng"
        }
      ]
    }
  },
  services: {
    title: "Dịch vụ luật Đất đai & Bất động sản tại văn phòng chúng tôi",
    items: [
      {
        icon: Home,
        title: "Tư vấn giao dịch BĐS",
        description: "Tư vấn toàn diện cho các giao dịch mua bán, cho thuê, chuyển nhượng bất động sản."
      },
      {
        icon: FilePen,
        title: "Soạn thảo hợp đồng BĐS",
        description: "Soạn thảo và thẩm định các loại hợp đồng liên quan đến bất động sản."
      },
      {
        icon: FileCheck,
        title: "Hỗ trợ thủ tục pháp lý",
        description: "Hỗ trợ các thủ tục cấp sổ, sang tên, chuyển nhượng quyền sử dụng đất."
      },
      {
        icon: Scale,
        title: "Giải quyết tranh chấp",
        description: "Đại diện khách hàng giải quyết tranh chấp đất đai tại tòa án và cơ quan nhà nước."
      }
    ]
  }
};

