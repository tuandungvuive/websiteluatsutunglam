"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  User, 
  Calendar, 
  BookOpen,
  Search,
  GraduationCap,
  Users,
  Target,
  Filter,
  Phone,
  Clock8
} from 'lucide-react';
import { Course } from '@/lib/utils/types';
import { courseData, allCourses } from '@/lib/utils/courses';

export default function CoursePage() {
  const { hero, featured, categories, features, cta } = courseData;

  const [filteredCourses, setFilteredCourses] = useState<Course[]>(allCourses);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [formatFilter, setFormatFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  
  // Xử lý áp dụng tất cả bộ lọc
  const applyFilters = useCallback(() => {
    let filtered = [...allCourses];
    
    // Lọc theo từ khóa tìm kiếm
    if (searchTerm) {
      filtered = filtered.filter((course) => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (course.categoryLabel && course.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Lọc theo danh mục khóa học
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(course => course.category === categoryFilter);
    }
    
    // Lọc theo cấp độ (cơ bản/nâng cao)
    if (formatFilter !== 'all') {
      filtered = filtered.filter(course => course.level && course.level.toLowerCase() === formatFilter.toLowerCase());
    }
    
    // Lọc theo ngày
    if (dateFilter !== 'all') {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth();
      const currentYear = currentDate.getFullYear();
      
      if (dateFilter === 'upcoming') {
        // Lọc các khóa học sắp tới (từ tháng hiện tại trở đi)
        filtered = filtered.filter(course => {
          // Kiểm tra nếu course.date tồn tại
          if (!course.date) return true;
          
          // Phân tích ngày từ định dạng "Ngày 15 tháng 2 năm 2025"
          const dateMatch = course.date.match(/Ngày (\d+) tháng (\d+) năm (\d+)/);
          if (dateMatch) {
            const courseMonth = parseInt(dateMatch[2]) - 1; // Trừ 1 vì tháng trong JS bắt đầu từ 0
            const courseYear = parseInt(dateMatch[3]);
            
            return (courseYear > currentYear) || 
                  (courseYear === currentYear && courseMonth >= currentMonth);
          }
          return true;
        });
      } else if (dateFilter === 'past') {
        // Lọc các khóa học đã qua
        filtered = filtered.filter(course => {
          // Kiểm tra nếu course.date tồn tại
          if (!course.date) return false;
          
          const dateMatch = course.date.match(/Ngày (\d+) tháng (\d+) năm (\d+)/);
          if (dateMatch) {
            const courseMonth = parseInt(dateMatch[2]) - 1;
            const courseYear = parseInt(dateMatch[3]);
            
            return (courseYear < currentYear) || 
                  (courseYear === currentYear && courseMonth < currentMonth);
          }
          return false;
        });
      }
    }
    
    setFilteredCourses(filtered);
  }, [searchTerm, categoryFilter, formatFilter, dateFilter]);

  // Xử lý xóa tất cả bộ lọc
  const clearFilters = () => {
    setSearchTerm('');
    setCategoryFilter('all');
    setFormatFilter('all');
    setDateFilter('all');
    setFilteredCourses([...allCourses]);
  };
  
  // Khởi tạo danh sách khóa học khi component được tạo
  useEffect(() => {
    setFilteredCourses([...allCourses]);
  }, []);
  
  // Tìm kiếm tự động khi người dùng nhập
  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (searchTerm !== '') {
        applyFilters();
      }
    }, 300);
    
    return () => clearTimeout(delaySearch);
  }, [searchTerm, applyFilters]);


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 text-center">
        <div className="container mx-auto px-4 ">
          <div className="flex justify-center mb-5 ">
            <Badge variant="outline" className="px-4 py-2 border border-blue-200 bg-blue-50 text-blue-600 text-sm">
              <GraduationCap className="w-4 h-4 mr-2" />
              {hero.badge}
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {hero.title}
          </h1>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 mb-8">
            {hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-black text-white hover:bg-gray-800 text-base py-6 px-8">
              <BookOpen className="mr-3 h-6 w-6" />
              {hero.buttons[0].text}
            </Button>
            
            <Button variant="outline" className="border-blue-600 text-blue-600 text-base py-6 px-8">
              <Calendar className="mr-3 h-6 w-6" />
              {hero.buttons[1].text}
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 bg-gray-50" id="featured-courses">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Các lớp học phổ biến
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            {featured.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCourses.filter(course => course.featured).map((course, index) => (
              <Card key={index} className="overflow-hidden flex flex-col h-full p-0 border border-gray-200 shadow-sm hover:shadow transition-shadow">
                <div className="aspect-[3/2] bg-gray-200 relative overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
                      {course.categoryLabel}
                    </Badge>
                    {course.level && (
                      <Badge variant="outline" className="bg-gray-50 text-gray-600 border-gray-200">
                        {course.level}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold">{course.title}</CardTitle>
                  <CardDescription className="line-clamp-2 text-gray-600">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-3 pt-0 flex-grow">
                  <div className="flex flex-col space-y-3 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-blue-600" />
                      <span>{course.instructor}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock8 className="w-4 h-4 mr-2 text-blue-600" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                      <span>{course.date}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-4 flex justify-center mt-auto">
                  <Link href={`/khoa-hoc/${course.id}`} passHref >
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                      Tìm hiểu thêm
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* All Courses Section */}
      <section className="py-16 bg-gray-50" id="all-courses">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Tất cả các khóa học và lớp học
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Tìm khóa học, lớp học phù hợp cho nhu cầu phát triển chuyên môn của bạn
          </p>
          
          {/* Filters */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200 shadow-sm">
            <div className="flex flex-col md:flex-row gap-3 items-start md:items-center">
              <div className="flex-grow relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  type="text" 
                  placeholder="Tìm kiếm lớp, khóa học..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-52 bg-white">
                  <SelectValue placeholder="Tất cả các danh mục" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả các danh mục</SelectItem>
                  {categories.filter(c => c.id !== 'all').map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={formatFilter} onValueChange={setFormatFilter}>
                <SelectTrigger className="w-full md:w-40 bg-white">
                  <SelectValue placeholder="Tất cả các định dạng" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả các định dạng</SelectItem>
                  <SelectItem value="cơ bản">Cơ bản</SelectItem>
                  <SelectItem value="nâng cao">Nâng cao</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={dateFilter} onValueChange={setDateFilter}>
                <SelectTrigger className="w-full md:w-36 bg-white">
                  <SelectValue placeholder="Ngày bắt đầu" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Mọi thời gian</SelectItem>
                  <SelectItem value="upcoming">Sắp tới</SelectItem>
                  <SelectItem value="past">Đã qua</SelectItem>
                </SelectContent>
              </Select>
              
              <Button 
                variant="default" 
                onClick={() => {
                  applyFilters();
                  // Thêm hiệu ứng cuộn xuống kết quả
                  setTimeout(() => {
                    const resultsElement = document.querySelector('.course-results');
                    if (resultsElement) {
                      resultsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }, 100);
                }} 
                className="whitespace-nowrap bg-blue-600 text-white hover:bg-blue-700"
              >
                <Filter className="w-4 h-4 mr-2" />
                Áp dụng bộ lọc
              </Button>
              
              <Button 
                variant="outline" 
                onClick={clearFilters} 
                className="whitespace-nowrap bg-white border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Xóa bộ lọc
              </Button>
            </div>
            
            <div className="text-sm text-gray-500 mt-4 flex items-center">
              <BookOpen className="w-4 h-4 mr-2 text-blue-600" />
              Hiển thị {filteredCourses.length} trong số {allCourses.length} khóa học
            </div>
          </div>
          
          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 course-results">
            {filteredCourses.map((course, index) => (
              <Card key={index} className="overflow-hidden flex flex-col p-0 h-full border border-gray-200 shadow-sm hover:shadow transition-shadow">
                <div className="aspect-[3/2] bg-gray-200 relative overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
                      {course.categoryLabel}
                    </Badge>
                    {course.level && (
                      <Badge variant="outline" className="bg-gray-50 text-gray-600 border-gray-200">
                        {course.level}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold">{course.title}</CardTitle>
                  <CardDescription className="line-clamp-2 text-gray-600">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-3 pt-0 flex-grow">
                  <div className="flex flex-col space-y-3 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-blue-600" />
                      <span>{course.instructor}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock8 className="w-4 h-4 mr-2 text-blue-600" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                      <span>{course.date}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-4 flex justify-center mt-auto">
                  <Link href={`/khoa-hoc/${course.id}`} passHref >
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                      Tìm hiểu thêm
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white" id="why-choose-us">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Tại sao nên chọn lớp học của chúng tôi?
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Các khóa học của chúng tôi được thiết kế và giảng dạy bởi luật sư hành nghề có kinh nghiệm thực tế, đảm bảo bạn có được kiến thức thực tế và có thể áp dụng.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.items.map((feature, index) => (
              <Card key={index} className="border border-gray-200 shadow-sm hover:shadow transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                      {feature.icon === 'user' && <User className="w-8 h-8 text-blue-600" />}
                      {feature.icon === 'target' && <Target className="w-8 h-8 text-blue-600" />}
                      {feature.icon === 'users' && <Users className="w-8 h-8 text-blue-600" />}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">
            {cta.title}
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            {cta.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-blue-600 text-blue-600">
              <BookOpen className="mr-2 h-5 w-5" />
              {cta.buttons[0].text}
            </Button>
            
            <Button className="bg-black text-white hover:bg-gray-800">
              <Phone className="mr-2 h-5 w-5" />
              {cta.buttons[1].text}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
