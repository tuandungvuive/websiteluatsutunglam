interface Sidebar {
  name: string;
  url: string;
  logo: string;
}

export const SidebarItems: Sidebar[] = [
  {
    name: "Quốc hội",
    url: "https://quochoi.vn",
    logo: "/sidebar/Quoc_Huy_Viet_Nam_Chuan.png"
  },
  {
    name: "Chính phủ",
    url: "https://www.chinhphu.vn",
    logo: "/sidebar/Emblem_of_Vietnam.svg.png"
  },
  {
    name: "Tòa án nhân dân tối cao",
    url: "https://www.toaan.gov.vn",
    logo: "/sidebar/logo-toa-an-nhan-dan-toi-cao.png"
  },
  {
    name: "Thành phố Hồ Chí Minh",
    url: "https://hochiminhcity.gov.vn",
    logo: "/sidebar/Thanh-pho-Ho-Chi-Minh.webp"
  }
];
