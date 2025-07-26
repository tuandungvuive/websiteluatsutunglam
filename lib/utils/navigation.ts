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
    href: "/hoat-dong"
  },
  {
    label: "LUẬT SƯ CỘNG SỰ",
    href: "/luat-su"
  },
  {
    label: "ST.Blog",
    href: "/blog"
  },
  {
    label: "LIÊN HỆ",
    href: "/lien-he"
  },
  {
    label: "DỊCH VỤ",
    href: "/dich-vu",
    children: [
      {
        label: "Dịch vụ 1",
        href: "/dich-vu-1"
      },
      {
        label: "Dịch vụ 2",
        href: "/dich-vu-2"
      },
      {
        label: "Dịch vụ 3",
        href: "/dich-vu-3"
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
    href: "/hoat-dong"
  },
  {
    label: "Luật sư - Cộng sự",
    href: "/luat-su"
  },
  {
    label: "ST.Blog",
    href: "/blog"
  },
  {
    label: "Dịch vụ",
    href: "/dich-vu"
  },
  {
    label: "Liên hệ",
    href: "/lien-he"
  }
];

// Legal Services for footer
export const legalServices: NavigationItem[] = [
  {
    label: "Luật Doanh nghiệp",
    href: "/dich-vu/doanh-nghiep"
  },
  {
    label: "Luật dân sự",
    href: "/dich-vu/dan-su"
  },
  {
    label: "Luật Hôn nhân & gia đình",
    href: "/dich-vu/hon-nhan-gia-dinh"
  },
  {
    label: "Luật đất đai",
    href: "/dich-vu/dat-dai"
  },
  {
    label: "Luật Hình sự",
    href: "/dich-vu/hinh-su"
  }
];

// Contact information
export const contactInfo = {
  companyName: "VĂN PHÒNG LUẬT SƯ TÙNG LÂM",
  address: "399 Bình Lợi, phường Bình Lợi Trung, Thành phố Hồ Chí Minh. (Văn phòng Luật sư Tùng Lâm)",
  phone: "0938571549",
  lawyer: "Luật sư Lê Song Tùng -Trưởng văn phòng",
  assistant: "Bà Lê Thị Liên - 0901373986",
  description: "Cung cấp các dịch vụ pháp lý đặc biệt với sự chính trực, tận tâm trong hơn 10 năm qua"
};

// Social media links
export const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: "facebook"
  },
  {
    name: "Messenger",
    href: "#",
    icon: "messenger"
  },
  {
    name: "Zalo",
    href: "#",
    icon: "zalo"
  },
  {
    name: "YouTube",
    href: "#",
    icon: "youtube"
  }
];
