import { 
  Book, 
  Briefcase, 
  Building, 
  FileText, 
  Home, 
  Scale, 
  Users 
} from "lucide-react";

export const blogData = {
  hero: {
    title: "ST.Blog",
    description: "Cập nhật thông tin qua các bài đăng trên blog mới nhất của chúng tôi về các chủ đề pháp lý quan trọng, các nghiên cứu tình huống và thông tin cập nhật thông tư của nhà nước Việt Nam."
  },
  categories: [
    { id: 'all', label: 'Tất cả' },
    { id: 'business', label: 'Luật Doanh nghiệp', icon: Building },
    { id: 'civil', label: 'Luật Dân sư', icon: FileText },
    { id: 'family', label: 'Luật hôn nhân & gia đình', icon: Users },
    { id: 'land', label: 'Luật Đất đai', icon: Home },
    { id: 'criminal', label: 'Luật Hình sự', icon: Scale },
  ],
  featuredPost: {
    id: '1',
    category: 'business',
    categoryLabel: 'Luật doanh nghiệp',
    title: 'Yêu cầu tuân thủ mới của doanh nghiệp năm 2025: Những điều doanh nghiệp cần biết',
    excerpt: 'Bối cảnh pháp lý tiếp tục thay đổi, với các yêu cầu tuân thủ mới có hiệu lực vào năm 2025. Hướng dẫn toàn diện của chúng tôi bao gồm mọi thông tin mà doanh nghiệp cần biết để tuân thủ và tránh các hình phạt tốn kém.',
    author: 'Lê Song Tùng',
    date: '15/12/2025',
    readTime: '6 phút',
    image: '/no_image.jpg'
  },
  recentPosts: [
    {
      id: '2',
      category: 'business',
      categoryLabel: 'Luật doanh nghiệp',
      title: 'Thành lập doanh nghiệp: Công ty TNHH hay Công ty cổ phần - Loại nào phù hợp với bạn?',
      excerpt: 'So sánh chi tiết các cấu doanh nghiệp để giúp các doanh nhân lựa chọn giải pháp tốt nhất cho nhu cầu và mục tiêu của thể của họ.',
      author: 'Luật sư Lê Song Tùng',
      date: '9 tháng 6 năm 2025',
      readTime: '6 phút',
      image: '/no_image.jpg'
    },
    {
      id: '3',
      category: 'civil',
      categoryLabel: 'Luật Dân sư',
      title: 'Hợp đồng thương mại: Những điều khoản bắt buộc cần có để đảm bảo quyền lợi',
      excerpt: 'Phân tích chi tiết các điều khoản quan trọng trong hợp đồng thương mại và cách bảo vệ quyền lợi của bạn trong giao dịch kinh doanh.',
      author: 'Luật sư Lê Song Tùng',
      date: '15 tháng 6 năm 2025',
      readTime: '8 phút',
      image: '/no_image.jpg'
    },
    {
      id: '4',
      category: 'family',
      categoryLabel: 'Luật hôn nhân & gia đình',
      title: 'Thủ tục ly hôn thuận tình: Quy trình và các giấy tờ cần chuẩn bị',
      excerpt: 'Hướng dẫn đầy đủ về quy trình ly hôn thuận tình tại Việt Nam, các giấy tờ cần thiết và thời gian xử lý.',
      author: 'Luật sư Nguyễn Văn An',
      date: '3 tháng 7 năm 2025',
      readTime: '7 phút',
      image: '/no_image.jpg'
    },
    {
      id: '5',
      category: 'land',
      categoryLabel: 'Luật Đất đai',
      title: 'Chuyển mục đích sử dụng đất: Thủ tục và chi phí phát sinh',
      excerpt: 'Phân tích quy trình chuyển đổi mục đích sử dụng đất từ đất nông nghiệp sang đất ở và các khoản phí liên quan.',
      author: 'Luật sư Trần Minh',
      date: '22 tháng 7 năm 2025',
      readTime: '9 phút',
      image: '/no_image.jpg'
    },
    {
      id: '6',
      category: 'criminal',
      categoryLabel: 'Luật Hình sự',
      title: 'Tội phạm công nghệ cao: Các hình thức phổ biến và cách phòng tránh',
      excerpt: 'Tổng quan về các loại tội phạm công nghệ cao tại Việt Nam và những biện pháp bảo vệ doanh nghiệp, cá nhân khỏi rủi ro.',
      author: 'Luật sư Phạm Hoài Nam',
      date: '5 tháng 8 năm 2025',
      readTime: '10 phút',
      image: '/no_image.jpg'
    },
    {
      id: '7',
      category: 'business',
      categoryLabel: 'Luật doanh nghiệp',
      title: 'Bảo vệ thương hiệu: Đăng ký nhãn hiệu và sở hữu trí tuệ',
      excerpt: 'Hướng dẫn chi tiết về quy trình đăng ký nhãn hiệu, bản quyền và cách bảo vệ tài sản trí tuệ cho doanh nghiệp.',
      author: 'Luật sư Lê Song Tùng',
      date: '18 tháng 8 năm 2025',
      readTime: '8 phút',
      image: '/no_image.jpg'
    }
  ],
  cta: {
    title: "BẠN CẦN TƯ VẤN/ GIẢI QUYẾT VẤN ĐỀ PHÁP LÝ ?",
    description: "Đừng chần chừ để nhận được sự trợ giúp pháp lý mà bạn cần. Văn phòng chúng tôi sẵn sàng cung cấp hướng dẫn chuyên môn và sự đại diện tích cực mà bạn xứng đáng được hưởng. Liên hệ với chúng tôi ngay hôm nay để được tư vấn.",
    buttons: [
      {
        text: "0938571549 - Luật sư Lê Song Tùng",
        href: "tel:0938571549",
        variant: "primary"
      },
      {
        text: "Đặt lịch hẹn tư vấn pháp lý",
        href: "/contact#appointment",
        variant: "secondary"
      }
    ]
  }
};
