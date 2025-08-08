// Define types for lawyers data
export interface Lawyer {
  id: number;
  name: string;
  position: string;
  specialization: string;
  imageUrl?: string;
}

// Carousel images
export const carouselImages = [
  {
    id: 1,
    src: "/carousel/moutain.jpg",
    alt: "Team Photo 1"
  },
  {
    id: 2,
    src: "/carousel/mountain2.jpg",
    alt: "Team Photo 2"
  },
  {
    id: 3,
    src: "/carousel/mountain3.jpg",
    alt: "Team Photo 3"
  }
];

// Lawyers data
export const lawyers: Lawyer[] = [
  { 
    id: 1, 
    name: "Luật sư Lê Song Tùng", 
    position: "Trưởng văn phòng", 
    specialization: "Luật Hình sự, Dân sự" 
  },
  { 
    id: 2, 
    name: "Luật sư Nguyễn Văn A", 
    position: "Phó văn phòng", 
    specialization: "Luật Doanh nghiệp" 
  },
  { 
    id: 3, 
    name: "Luật sư Trần Thị B", 
    position: "Thành viên", 
    specialization: "Luật Đất đai" 
  },
  { 
    id: 4, 
    name: "Luật sư Phạm Văn C", 
    position: "Thành viên", 
    specialization: "Luật Hôn nhân và Gia đình" 
  },
  { 
    id: 5, 
    name: "Luật sư Lê Thị D", 
    position: "Thành viên", 
    specialization: "Luật Lao động" 
  },
  { 
    id: 6, 
    name: "Luật sư Hoàng Văn E", 
    position: "Thành viên", 
    specialization: "Luật Sở hữu trí tuệ" 
  },
  { 
    id: 7, 
    name: "Luật sư Võ Thị F", 
    position: "Thành viên", 
    specialization: "Luật Hành chính" 
  },
  { 
    id: 8, 
    name: "Luật sư Đỗ Văn G", 
    position: "Thành viên", 
    specialization: "Luật Thuế" 
  },
];
