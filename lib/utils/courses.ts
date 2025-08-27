import { Course} from "./types";
// Dữ liệu khóa học
// Export mảng tất cả các khóa học
export const allCourses: Course[] = [
  {
    id: "1",
    title: "Những nguyên tắc cơ bản của Luật Doanh nghiệp",
    description: "Nắm vững những khía cạnh thiết yếu của luật doanh nghiệp mà mọi chủ doanh nghiệp cần biết. Khóa học toàn diện này sẽ giúp bạn hiểu rõ về các quy định pháp luật liên quan đến việc thành lập, vận hành và quản lý doanh nghiệp tại Việt Nam.",
    category: "business",
    categoryLabel: "Luật doanh nghiệp",
    instructor: "Luật sư Lê Song Tùng",
    duration: "8 Tuần",
    level: "Cơ bản",
    students: 15,
    image: "/no_image.jpg",
    rating: 4.9,
    date: "Ngày 15 tháng 2 năm 2025",
    featured: true
  },
  {
    id: "2",
    title: "Lớp học hòa giải trong Luật hôn nhân & gia đình",
    description: "Lớp học chuyên nhận toàn diện về hòa giải Luật hôn nhân & gia đình. Học các kỹ thuật giải quyết xung đột hiệu quả và kinh nghiệm thực tiễn trong việc giải quyết các vấn đề pháp lý liên quan đến hôn nhân và gia đình.",
    category: "family",
    categoryLabel: "Luật hôn nhân & gia đình",
    instructor: "Luật sư Lê Song Tùng",
    duration: "6 Tuần",
    level: "Nâng cao",
    students: 12,
    image: "/no_image.jpg",
    rating: 4.8,
    date: "Ngày 5 tháng 6 năm 2025",
    featured: true
  },
  {
    id: "3",
    title: "Luật dân sự: Từ khiếu nại đến giải quyết",
    description: "Tìm hiểu toàn bộ quy trình pháp lý của thủ tục khiếu nại dân sự, từ thư ban đầu đến phiên tòa và quyết định cuối cùng. Khóa học này sẽ giúp bạn nắm vững các bước cần thiết để giải quyết hiệu quả các tranh chấp dân sự.",
    category: "civil",
    categoryLabel: "Luật dân sự",
    instructor: "Luật sư Lê Song Tùng",
    duration: "6 Tuần",
    level: "Cơ bản",
    students: 18,
    image: "/no_image.jpg",
    rating: 4.9,
    date: "Ngày 15 tháng 2 năm 2025"
  },
  {
    id: "4",
    title: "Luật Đất đai dành cho Đại lý và Môi giới",
    description: "Kiến thức pháp lý về Luật Đất đai thiết yếu cho các đại lý và môi giới bất động sản. Khóa học này cung cấp những hiểu biết sâu sắc về các quy định pháp luật liên quan đến đất đai, quyền sử dụng đất và các giao dịch bất động sản.",
    category: "land",
    categoryLabel: "Luật Đất đai",
    instructor: "Luật sư Lê Song Tùng",
    duration: "4 tuần",
    level: "Cơ bản",
    students: 20,
    image: "/no_image.jpg",
    rating: 4.9,
    date: "Ngày 15 tháng 2 năm 2025"
  },
  {
    id: "5",
    title: "Hội thảo Chiến lược Phòng thủ Hình sự",
    description: "Hội thảo chuyên sâu về các chiến lược phòng thủ hình sự nâng cao, chiến thuật xét xử và kỹ năng biện hộ trong các vụ án hình sự. Được thiết kế cho các luật sư hình sự và những người quan tâm đến lĩnh vực tư pháp hình sự.",
    category: "criminal",
    categoryLabel: "Luật Hình sự",
    instructor: "Luật sư Lê Song Tùng",
    duration: "2 tuần",
    level: "Nâng cao",
    students: 25,
    image: "/no_image.jpg",
    rating: 4.9,
    date: "Ngày 15 tháng 2 năm 2025"
  },
  {
    id: "6",
    title: "Luật Đất đai và Quy hoạch đô thị",
    description: "Khóa học chuyên sâu về mối quan hệ giữa luật đất đai và quy hoạch đô thị. Tìm hiểu về các quy định pháp luật, thủ tục hành chính và những thách thức thực tế trong việc phát triển dự án đất đai trong bối cảnh đô thị hóa.",
    category: "land",
    categoryLabel: "Luật Đất đai",
    instructor: "Luật sư Lê Song Tùng",
    duration: "4 tuần",
    level: "Cơ bản",
    students: 22,
    image: "/no_image.jpg",
    rating: 4.9,
    date: "Ngày 15 tháng 2 năm 2025"
  }
];
export const courseData = {
  hero: {
    title: "THƯƠNG THỨC GIÁO DỤC",
    description: "Nâng cao kiến thức pháp lý và kỹ năng chuyên môn của bạn với các khóa học và lớp học do văn phòng chúng tôi đảm nhiệm. Được giảng dạy bởi luật sư giàu kinh nghiệm và chuyên môn thực tế.",
    badge: "12+ năm kinh nghiệm hành nghề",
    buttons: [
      {
        text: "Đặt lịch hẹn",
        href: "/contact#appointment",
        variant: "primary"
      },
      {
        text: "Xem trước lớp học",
        href: "#featured-courses",
        variant: "secondary"
      }
    ]
  },
  featured: {
    title: "Các lớp học phổ biến",
    description: "Các lớp học phổ biến và được đánh giá cao nhất của chúng tôi được thiết kế để cung cấp kiến thức pháp lý thực tế và phát triển chuyên môn.",
    badge: "Chương trình nổi bật",
    courses: [
      {
        id: "1",
        title: "Những nguyên tắc cơ bản của Luật Doanh nghiệp",
        description: "Nắm vững những khía cạnh thiết yếu của luật doanh nghiệp mà mọi chủ doanh nghiệp cần biết. Khóa học toàn diện này...",
        category: "business",
        categoryLabel: "Luật doanh nghiệp",
        instructor: "Luật sư Lê Song Tùng",
        duration: "8 Tuần",
        image: "/no_image.jpg",
        rating: 4.9,
        date: "Ngày 5 tháng 6 năm 2025",
        featured: true
      },
      {
        id: "2",
        title: "Lớp học hòa giải trong Luật hôn nhân & gia đình",
        description: "Lớp học chuyên nhận toàn diện về hòa giải Luật hôn nhân & gia đình. Học các kỹ thuật giải quyết xung đột hiệu quả và kinh lý kiện nghiệm...",
        category: "family",
        categoryLabel: "Luật hôn nhân & gia đình",
        instructor: "Luật sư Lê Song Tùng",
        duration: "8 Tuần",
        image: "/no_image.jpg",
        rating: 4.8,
        date: "Ngày 5 tháng 6 năm 2025",
        featured: true
      }
    ]
  },
  categories: [
    { id: 'all', label: 'Tất cả' },
    { id: 'business', label: 'Luật Doanh nghiệp' },
    { id: 'civil', label: 'Luật Dân sự' },
    { id: 'family', label: 'Luật hôn nhân & gia đình' },
    { id: 'land', label: 'Luật Đất đai' },
    { id: 'criminal', label: 'Luật Hình sự' }
  ],
  allCourses: {
    title: "Tất cả các khóa học và lớp học",
    description: "Tìm khóa học, lớp học phù hợp cho nhu cầu phát triển chuyên môn của bạn. Sử dụng bộ lọc của chúng tôi để thu hẹp lựa chọn theo danh mục, định dạng và cấp độ.",
    courses: [
      {
        id: "1",
        title: "Những nguyên tắc cơ bản của Luật Doanh nghiệp",
        description: "Nắm vững những khía cạnh thiết yếu của luật doanh nghiệp mà mọi chủ doanh nghiệp cần biết.",
        category: "business",
        categoryLabel: "Luật doanh nghiệp",
        instructor: "Luật sư Lê Song Tùng",
        duration: "8 Tuần",
        level: "Cơ bản",
        students: 15,
        image: "/no_image.jpg",
        rating: 4.9,
        date: "Ngày 15 tháng 2 năm 2025"
      },
      {
        id: "2",
        title: "Lớp học hòa giải Luật hôn nhân & gia đình",
        description: "Lớp học chuyên nhận toàn diện về hòa giải Luật hôn nhân & gia đình. Học các kỹ thuật giải quyết xung đột hiệu quả và kinh lý kiện nghiệm...",
        category: "family",
        categoryLabel: "Luật hôn nhân & gia đình",
        instructor: "Luật sư Lê Song Tùng",
        duration: "6 Tuần",
        level: "Nâng cao",
        students: 12,
        image: "/no_image.jpg",
        rating: 4.8,
        date: "Ngày 15 tháng 2 năm 2025"
      },
      {
        id: "3",
        title: "Luật dân sự: Từ khiếu nại đến giải quyết",
        description: "Tìm hiểu toàn bộ quy trình pháp lý của thủ tục khiếu nại dân sự, từ thư ban đầu đến...",
        category: "civil",
        categoryLabel: "Luật dân sự",
        instructor: "Luật sư Lê Song Tùng",
        duration: "6 Tuần",
        level: "Cơ bản",
        students: 18,
        image: "/no_image.jpg",
        rating: 4.9,
        date: "Ngày 15 tháng 2 năm 2025"
      },
      {
        id: "4",
        title: "Luật Đất đai dành cho Đại lý và Môi giới",
        description: "Kiến thức pháp lý về Luật Đất đai thiết yếu. Học cách môi trường",
        category: "land",
        categoryLabel: "Luật Đất đai",
        instructor: "Luật sư Lê Song Tùng",
        duration: "4 tuần",
        level: "Cơ bản",
        students: 20,
        image: "/no_image.jpg",
        rating: 4.9,
        date: "Ngày 15 tháng 2 năm 2025"
      },
      {
        id: "5",
        title: "Hội thảo Chiến lược Phòng thủ Hình sự",
        description: "Hội thảo chuyên sâu về các chiến lược phòng thủ hình sự nâng cao, chiến thuật xét xử và...",
        category: "criminal",
        categoryLabel: "Luật Hình sự",
        instructor: "Luật sư Lê Song Tùng",
        duration: "2 tuần",
        level: "Nâng cao",
        students: 25,
        image: "/no_image.jpg",
        rating: 4.9,
        date: "Ngày 15 tháng 2 năm 2025"
      },
      {
        id: "6",
        title: "Luật Đất đai dành cho Đại lý và Môi giới",
        description: "Kiến thức pháp lý về Luật Đất đai thiết yếu. Học cách môi trường",
        category: "land",
        categoryLabel: "Luật Đất đai",
        instructor: "Luật sư Lê Song Tùng",
        duration: "4 tuần",
        level: "Cơ bản",
        students: 22,
        image: "/no_image.jpg",
        rating: 4.9,
        date: "Ngày 15 tháng 2 năm 2025"
      }
    ]
  },
  features: {
    title: "Tại sao nên chọn lớp học của chúng tôi?",
    description: "Các khóa học của chúng tôi được thiết kế và giảng dạy bởi luật sư hành nghề có kinh nghiệm thực tế, đảm bảo bạn có được kiến thức thực tế và có thể áp dụng.",
    items: [
      {
        icon: "user",
        title: "Kinh nghiệm thực tiễn",
        description: "Trao đổi trực tiếp với luật sư hành nghề có hơn 12 năm kinh nghiệm trong lĩnh vực."
      },
      {
        icon: "target",
        title: "Tập trung vào ứng dụng",
        description: "Học các kỹ năng thực tế mà bạn có thể áp dụng ngay vào công việc của mình."
      },
      {
        icon: "users",
        title: "Lớp học nhỏ",
        description: "Số lượng học viên có hạn trong mỗi lớp nhằm đảm bảo sự tương tác và hỗ trợ cá nhân hóa."
      }
    ]
  },
  cta: {
    title: "BẠN CẦN TƯ VẤN/ GIẢI QUYẾT VẤN ĐỀ PHÁP LÝ ?",
    description: "Đừng chần chừ để nhận được sự trợ giúp pháp lý mà bạn cần. Văn phòng chúng tôi sẵn sàng cung cấp hướng dẫn chuyên môn và sự đại diện tích cực mà bạn xứng đáng được hưởng. Liên hệ với chúng tôi ngay hôm nay để được tư vấn.",
    buttons: [
      {
        text: "Tham khảo khóa học",
        href: "#all-courses",
        variant: "secondary",
        icon: "book-open"
      },
      {
        text: "0938571549 - Luật sư Lê Song Tùng",
        href: "tel:0938571549",
        variant: "primary",
        icon: "phone"
      }
    ]
  }
};
