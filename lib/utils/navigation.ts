// Navigation constants for the website

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export const mainNavigation: NavigationItem[] = [
  {
    label: "TRANG CHỦ",
    href: "/"
  },
  {
    label: "HOẠT ĐỘNG HÀNH NGHỀ",
    href: "/activity"
  },
  {
    label: "LUẬT SƯ CỘNG SỰ",
    href: "/lawyers"
  },
  {
    label: "ST.Blog",
    href: "/blog"
  },
  {
    label: "LIÊN HỆ",
    href: "/contact"
  },
  {
    label: "DỊCH VỤ",
    href: "/services",
    children: [
      {
        label: "Dịch vụ 1",
        href: "/services-1"
      },
      {
        label: "Dịch vụ 2",
        href: "/services-2"
      },
      {
        label: "Dịch vụ 3",
        href: "/services-3"
      }
    ]
  }
];

// Quick Links for footer
export const quickLinks: NavigationItem[] = [
  {
    label: "Trang chủ",
    href: "/"
  },
  {
    label: "Hoạt động hành nghề",
    href: "/activity"
  },
  {
    label: "Luật sư - Cộng sự",
    href: "/lawyers"
  },
  {
    label: "ST.Blog",
    href: "/blog"
  },
  {
    label: "Dịch vụ",
    href: "/services"
  },
  {
    label: "Liên hệ",
    href: "/contact"
  }
];

// Legal Services for footer
export const legalServices: NavigationItem[] = [
  {
    label: "Luật Doanh nghiệp",
    href: "/activity/corporate"
  },
  {
    label: "Luật dân sự",
    href: "/activity/civil"
  },
  {
    label: "Luật Hôn nhân & gia đình",
    href: "/activity/family"
  },
  {
    label: "Luật đất đai",
    href: "/activity/real-estate"
  },
  {
    label: "Luật Hình sự",
    href: "/activity/criminal"
  }
];

// Contact information
export const contactInfo = {
  companyName: "VĂN PHÒNG LUẬT SƯ TÙNG LÂM",
  address: "399 Bình Lợi, phường Bình Lợi Trung,Thành phố Hồ Chí Minh (Văn phòng Luật sư Tùng Lâm)",
  phone: "0938571549",
  lawyer: "Luật sư Lê Song Tùng -Trưởng văn phòng",
  assistant: "Bà Lê Thị Liên - 0901373986",
  description: "Cung cấp các dịch vụ pháp lý đặc biệt với sự chính trực, tận tâm trong hơn 10 năm qua"
};

