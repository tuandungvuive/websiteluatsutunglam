interface Sidebar {
  name: string;
  url: string;
  logo: string;
}

export const SidebarItems: Sidebar[] = [
  {
    name: "Quốc hội",
    url: "https://quochoi.vn",
    logo: "/logo/Quoc_Huy_Viet_Nam_Chuan.png"
  },
  {
    name: "Chính phủ",
    url: "https://www.chinhphu.vn",
    logo: "/logo/Emblem_of_Vietnam.svg.png"
  },
  {
    name: "Tòa án nhân dân tối cao",
    url: "https://www.toaan.gov.vn",
    logo: "/logo/logo-toa-an-nhan-dan-toi-cao.png"
  },
  {
    name: "Thành phố Hồ Chí Minh",
    url: "https://hochiminhcity.gov.vn",
    logo: "/logo/Thanh-pho-Ho-Chi-Minh.webp"
  }
];
