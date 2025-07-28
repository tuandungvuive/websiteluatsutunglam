import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Users, Clock, Scale, Zap, HeartHandshake, Award, Target, BriefcaseBusiness, Building, Shield, Home, Heart, ArrowRight, Monitor, GraduationCap, Globe, Rocket, CodeXml, BookOpen, FileText, PencilLine } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Main = () => {
  return (
    <>
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
                <Scale className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-blue-600 text-sm font-medium">
                  12+ năm kinh nghiệm hành nghề
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Đối tác pháp lý đáng tin cậy của bạn
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Văn phòng luật sư Tùng Lâm cung cấp dịch vụ đại diện pháp lý cho khách hàng trên mọi lĩnh vực hành nghề
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/lien-he"
                  className="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  ĐẶT LỊCH HẸN
                </Link>
                <Link 
                  href="/dich-vu"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Tham khảo dịch vụ
                </Link>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-4">
                {/* Chuyên nghiệp */}
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-blue-50 border border-blue-200 rounded-full flex items-center justify-center mr-5 flex-shrink-0">
                    <BriefcaseBusiness className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base mb-1">Chuyên nghiệp</h3>
                    <p className="text-sm text-gray-600">10+ năm kinh nghiệm hành nghề</p>
                  </div>
                </div>

                {/* Tận tâm */}
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-blue-50 border border-blue-200 rounded-full flex items-center justify-center mr-5 flex-shrink-0">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base mb-1">Tận tâm</h3>
                    <p className="text-sm text-gray-600">Đặt khách hàng là trọng tâm</p>
                  </div>
                </div>

                {/* 24/7 */}
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-blue-50 border border-blue-200 rounded-full flex items-center justify-center mr-5 flex-shrink-0">
                    <Clock className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base mb-1">24/7</h3>
                    <p className="text-sm text-gray-600">Hỗ trợ</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="bg-gray-200 rounded-lg w-2/3 h-full flex items-center justify-center overflow-hidden mx-auto">
                {/* No Image Placeholder */}
                <Image 
                  src="/no_image.jpg" 
                  alt="Hình ảnh sẽ được thêm vào sau" 
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <Target className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-blue-600 text-sm font-medium">
                Giá trị cốt lõi
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Xuất sắc trong tố tụng,
            </h2>
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-6">
              Chính trực trong mọi hành động
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Chúng tôi kết hợp kinh nghiệm pháp lý xây dựng trong 1 thập kỷ qua với các phương pháp tiếp cận sáng tạo để mang lại kết quả vượt mong đợi.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="text-center h-full flex flex-col">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Hướng đến sự hiệu quả
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-gray-600">
                  Chúng tôi tập trung vào việc đạt được kết quả tốt nhất có thể cho khách hàng thông qua tư duy chiến lược và hoạt động văn sự đội với vụ việc.
                </CardDescription>
              </CardContent>
              <CardFooter className="justify-center">
                <Link 
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Hiệu quả cao
                </Link>
              </CardFooter>
            </Card>

            {/* Card 2 */}
            <Card className="text-center h-full flex flex-col">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeartHandshake className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Khách hàng làm trọng tâm
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-gray-600">
                  Mỗi vị khách đều mong muốn nhận được sự quan tâm riêng và các chiến lược pháp lý được hợp với hoàn cảnh riêng của họ.
                </CardDescription>
              </CardContent>
              <CardFooter className="justify-center">
                <Link 
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Hỗ trợ 24/7
                </Link>
              </CardFooter>
            </Card>

            {/* Card 3 */}
            <Card className="text-center h-full flex flex-col">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Ethical Excellence
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-gray-600">
                  We maintain the highest ethical standards while providing transparent communication throughout your case.
                </CardDescription>
              </CardContent>
              <CardFooter className="justify-center">
                <Link 
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  <Award className="w-4 h-4 mr-2" />
                  Hỗ trợ 24/7
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <FileText className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-blue-600 text-sm font-medium">
                Lĩnh vực hành nghề
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Dịch vụ pháp lý toàn diện
            </h2>
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-6">
              Trên tất cả các lĩnh vực hành nghề
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Từ các hợp đồng giao dịch phức tạp đến các khiếu nại dân sự, bảo chữa dương sự hình sự, Văn phòng Luật sư Tùng Lâm cung cấp dịch vụ đại diện chuyên môn trên nhiều lĩnh vực pháp luật.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Luật Doanh nghiệp */}
            <Card className="group hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center mb-3">
                  <BriefcaseBusiness className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">
                  Luật Doanh nghiệp
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 pt-0">
                <CardDescription className="text-gray-600 text-sm mb-4">
                  Thành lập doanh nghiệp.Mua bán vốn góp chuyển nhượng cổ phần,tham gia các tổ chức tự doanh và tài chính khác.
                </CardDescription>
              </CardContent>
              <CardFooter className="justify-center">
                <Link 
                  href="/dich-vu/luat-doanh-nghiep"
                  className="inline-flex items-center justify-center px-5 py-2 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors text-sm"
                >
                  Tham khảo về Luật Doanh nghiệp
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>

            {/* Luật Dân sự */}
            <Card className="group hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">
                  Luật Dân sự
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 pt-0">
                <CardDescription className="text-gray-600 text-sm mb-4">
                  Giải quyết các vụ việc tranh chấp hợp đồng dân sự.Tranh chấp tư liệu thương tố và các hành vi vi dân tích.
                </CardDescription>
              </CardContent>
              <CardFooter className="justify-center">
                <Link 
                  href="/dich-vu/luat-dan-su"
                  className="inline-flex items-center justify-center px-5 py-2 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors text-sm"
                >
                  Tham khảo về Luật Dân sự
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>

            {/* Luật Hôn nhân và Gia đình */}
            <Card className="group hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center mb-3">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">
                  Luật Hôn nhân và Gia đình
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 pt-0">
                <CardDescription className="text-gray-600 text-sm mb-4">
                  Tư vấn, hướng dẫn xin thành thủ tục giải ly hôn, chia tài sản chung giữa vợ và chồng,quyền nuôi con và các vấn đề khác.
                </CardDescription>
              </CardContent>
              <CardFooter className="justify-center">
                <Link 
                  href="/dich-vu/luat-hon-nhan-gia-dinh"
                  className="inline-flex items-center justify-center px-5 py-2 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors text-sm"
                >
                  Tìm hiểu về Luật Hôn nhân Gia đình
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>

            {/* Luật Đất đai */}
            <Card className="group hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center mb-3">
                  <Home className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">
                  Luật Đất đai
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 pt-0">
                <CardDescription className="text-gray-600 text-sm mb-4">
                  Tư vấn các thủ tục pháp lý liên quan đến việc sử dụng đất đai.Tách thửa họp đông và cấp bàng sở hữu nhà ở.Điều kiện của việc chuyển nhượng quyền sử dụng đất và tài sản khác.
                </CardDescription>
              </CardContent>
              <CardFooter className="justify-center">
                <Link 
                  href="/dich-vu/luat-dat-dai"
                  className="inline-flex items-center justify-center px-5 py-2 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors text-sm"
                >
                  Tham khảo về Luật Đất đai
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>

            {/* Luật Hình sự */}
            <Card className="group hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center mb-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">
                  Luật Hình sự
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 pt-0">
                <CardDescription className="text-gray-600 text-sm mb-4">
                  Bào chữa tịch cực cho bị cáo và bị can trong lĩnh vực tội phạm diện về an toàn tổng lê và dân chủ.
                </CardDescription>
              </CardContent>
              <CardFooter className="justify-center">
                <Link 
                  href="/dich-vu/luat-hinh-su"
                  className="inline-flex items-center justify-center px-5 py-2 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors text-sm"
                >
                  Tham khảo về Luật Hình sự
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>

            {/* Luật Lao động */}
            <Card className="group hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center mb-3">
                  <Building className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">
                  Luật Lao động
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 pt-0">
                <CardDescription className="text-gray-600 text-sm mb-4">
                  Tư vấn và hỗ trợ giải quyết các tranh chấp lao động.Thành lập hợp đồng và phàn xử về chính sách lao động.
                </CardDescription>
              </CardContent>
              <CardFooter className="justify-center">
                <Link 
                  href="/dich-vu/luat-lao-dong"
                  className="inline-flex items-center justify-center px-5 py-2 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors text-sm"
                >
                  Tham khảo về Luật Lao động
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-10">
            <Link 
              href="/dich-vu"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              Tham khảo lĩnh vực hành nghề
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
                <Rocket className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-blue-600 text-sm font-medium">
                  Dịch vụ khác
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Không chỉ là dịch vụ pháp lý
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Là luật sư hành nghề, chúng tôi hiểu những thách thức mà các công ty luật hiện đại phải đối mặt. Đó là lý do tại sao chúng tôi mở rộng dịch vụ của mình để bao gồm phát triển web chuyên nghiệp và giáo dục pháp lý - giúp bạn thành công trong thế giới kỹ thuật số ngày nay.
                </p>
              </div>

              {/* Service Features */}
              <div className="space-y-6">
                {/* Website Development */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Dịch vụ Website chuyên nghiệp</h3>
                    <p className="text-gray-600">
                      Các trang web tùy chỉnh được thiết kế riêng cho các cá nhân tổ chức và dịch vụ pháp lý, công ty với thiết kế hiện đại, tối ưu hóa SEO và quản trị pháp lý.
                    </p>
                  </div>
                </div>

                {/* Legal Education */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Lớp học và khóa học đào tạo nghiệp vụ pháp lý</h3>
                    <p className="text-gray-600">
                      Các khóa học chuyên nghiệp về lập học nghiệp và đào tạo pháp lý nhằm giúp sinh viên nắm bắt đầy đủ các kiến thức cần thiết để giỏi kinh nghiệm gáng đây chủ các.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/dich-vu/website"
                  className="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <CodeXml className="w-5 h-5 mr-2" />
                  Đến dịch vụ Website
                </Link>
                <Link 
                  href="/khoa-hoc"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Tham khảo khóa học
                </Link>
              </div>
            </div>

            {/* Right Stats */}
            <div className="space-y-6">
              {/* Top Row - Two Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* 50+ Websites */}
                <Card className="text-center border border-gray-200 rounded-2xl bg-white">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Monitor className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">50+ Websites mẫu</div>
                    <div className="text-sm text-gray-600">Xây dựng cho đa ngành nghề</div>
                  </CardContent>
                </Card>

                {/* Students */}
                <Card className="text-center border border-gray-200 rounded-2xl bg-white">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">Học viên</div>
                    <div className="text-sm text-gray-600">Được đào tạo và hướng dẫn</div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Bottom Row - One Card Centered */}
              <div className="flex justify-center">
                <Card className="text-center border border-gray-200 rounded-2xl bg-white w-full max-w-[calc(50%-0.75rem)]">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">25+ Khóa học</div>
                    <div className="text-sm text-gray-600">Chương trình hành nghề Luật</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-gray-50 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
                <BookOpen className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-blue-600 text-sm font-medium">
                  Blog tham khảo
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Blog cập nhật gần đây nhất
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Cập nhật những blog thông tin mới nhất về pháp luật, nghiên cứu tình huống và các cập nhật quan trọng về pháp lý nhà nước. Ngoài ra, Blog cũng cập nhật các bài viết liên quan đến các dịch vụ mà văn phòng đương nhiệm.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link 
                href="/blog"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                Đến trang Blog
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Card 1 */}
            <Card className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden p-0 h-full flex flex-col">
              <div className="aspect-[3/2] bg-gray-200 relative overflow-hidden">
                <Image 
                  src="/no_image.jpg" 
                  alt="Thành lập doanh nghiệp" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="p-6 pb-4">
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-600 mb-4 w-fit">
                  <Scale className="w-3 h-3 mr-1" />
                  Luật doanh nghiệp
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  Thành lập doanh nghiệp: Công ty TNHH hay Công ty cổ phần - Loại nào phù hợp với bạn?
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm line-clamp-3">
                  So sánh chi tiết các cơ cấu doanh nghiệp để giúp các doanh nhân lựa chọn giải pháp tốt nhất cho nhu cầu và mục tiêu cụ thể của mình.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 pt-0 flex-1">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <PencilLine className="w-4 h-4 mr-2 text-blue-600" />
                  <span>Tác giả: Luật sư Lê Song Tùng</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Clock className="w-4 h-4 mr-2 text-blue-600" />
                  <span>Thời gian đọc: 6 phút</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                  <span>Ngày 5 tháng 6 năm 2025</span>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-4 flex justify-center">
                <Link 
                  href="/blog/thanh-lap-doanh-nghiep"
                  className="inline-flex items-center justify-center px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Xem bài viết
                </Link>
              </CardFooter>
            </Card>

            {/* Blog Card 2 */}
            <Card className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden p-0 h-full flex flex-col">
              <div className="aspect-[3/2] bg-gray-200 relative overflow-hidden">
                <Image 
                  src="/no_image.jpg" 
                  alt="Thành lập doanh nghiệp" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="p-6 pb-4">
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-600 mb-4 w-fit">
                  <Scale className="w-3 h-3 mr-1" />
                  Luật doanh nghiệp
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  Thành lập doanh nghiệp: Công ty TNHH hay Công ty cổ phần - Loại nào phù hợp với bạn?
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm line-clamp-3">
                  So sánh chi tiết các cơ cấu doanh nghiệp để giúp các doanh nhân lựa chọn giải pháp tốt nhất cho nhu cầu và mục tiêu cụ thể của mình.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 pt-0 flex-1">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <PencilLine className="w-4 h-4 mr-2 text-blue-600" />
                  <span>Tác giả: Luật sư Lê Song Tùng</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Clock className="w-4 h-4 mr-2 text-blue-600" />
                  <span>Thời gian đọc: 6 phút</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                  <span>Ngày 5 tháng 6 năm 2025</span>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-4 flex justify-center">
                <Link 
                  href="/blog/thanh-lap-doanh-nghiep"
                  className="inline-flex items-center justify-center px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Xem bài viết
                </Link>
              </CardFooter>
            </Card>

            {/* Blog Card 3 */}
            <Card className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden p-0 h-full flex flex-col">
              <div className="aspect-[3/2] bg-gray-200 relative overflow-hidden">
                <Image 
                  src="/no_image.jpg" 
                  alt="Thành lập doanh nghiệp" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="p-6 pb-4">
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-600 mb-4 w-fit">
                  <Scale className="w-3 h-3 mr-1" />
                  Luật doanh nghiệp
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  Thành lập doanh nghiệp: Công ty TNHH hay Công ty cổ phần - Loại nào phù hợp với bạn?
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm line-clamp-3">
                  So sánh chi tiết các cơ cấu doanh nghiệp để giúp các doanh nhân lựa chọn giải pháp tốt nhất cho nhu cầu và mục tiêu cụ thể của mình.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 pt-0 flex-1">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <PencilLine className="w-4 h-4 mr-2 text-blue-600" />
                  <span>Tác giả: Luật sư Lê Song Tùng</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Clock className="w-4 h-4 mr-2 text-blue-600" />
                  <span>Thời gian đọc: 6 phút</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                  <span>Ngày 5 tháng 6 năm 2025</span>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-4 flex justify-center">
                <Link 
                  href="/blog/thanh-lap-doanh-nghiep"
                  className="inline-flex items-center justify-center px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Xem bài viết
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};export default Main;
