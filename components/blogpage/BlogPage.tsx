"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, 
  User, 
  ArrowRight,
  Bookmark, 
  Calendar, 
  Briefcase,
  BookOpen,
  FileText,
  Search,
  Tag,
  Filter
} from 'lucide-react';
import { blogData, BlogCategory, BlogPost} from '@/lib/utils/blog';
import { activityData } from '@/lib/utils/activity';


export default function BlogPage() {
  const { categories, featuredPost, recentPosts } = blogData;

  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(recentPosts);
  const { hero } = blogData;
  const { cta } = activityData;
  
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredPosts(recentPosts);
    } else {
      const filtered = recentPosts.filter((post) => post.category === activeCategory);
      setFilteredPosts(filtered);
    }
  }, [activeCategory, recentPosts]);

  return (
    <div className="min-h-screen bg-white">
      {/* Blog Header */}
      <section className="bg-black text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{hero.title}</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            {hero.description}
          </p>
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative flex items-center">
              <Input 
                type="text"
                placeholder="Tìm kiếm bài viết"
                className="w-full py-6 px-6 pr-12 rounded-full border-2 border-gray-200 bg-white text-gray-800 focus-visible:ring-blue-500"
              />
              <div className="absolute right-4">
                <Button variant="ghost" className="p-2 h-auto rounded-full hover:bg-transparent">
                  <Search className="w-5 h-5 text-gray-500" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-primary">
            <Bookmark className="text-primary" /> 
            <span>Bài blog nổi bật</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-5 lg:col-span-4">
              <Card className="overflow-hidden border-none shadow-lg h-full p-0">
                <div className="relative h-full min-h-[300px]">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <Badge variant="secondary" className="bg-blue-600 hover:bg-blue-700 text-white mb-2">
                      {featuredPost.categoryLabel}
                    </Badge>
                    <h3 className="text-xl font-bold line-clamp-2 mb-2">{featuredPost.title}</h3>
                    <div className="flex items-center text-sm gap-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{featuredPost.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="md:col-span-7 lg:col-span-8">
              <Card className="h-full border shadow-md">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <Badge className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6 text-primary">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {featuredPost.categoryLabel}
                    </Badge>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center">
                      <User className="w-5 h-5 text-primary mr-2" />
                      <span className="text-sm text-gray-700">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-primary mr-2" />
                      <span className="text-sm text-gray-700">{featuredPost.readTime}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-primary mr-2" />
                      <span className="text-sm text-gray-700">{featuredPost.date}</span>
                    </div>
                  </div>
                  <Button variant="default" className="bg-black text-white hover:bg-gray-800 self-start">
                    <BookOpen className="mr-2 h-4 w-4" /> Xem bài blog <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Categories */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Filter className="text-primary h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold">Danh mục bài viết</h2>
            </div>
            <div className="flex items-center gap-2 text-primary bg-blue-50 px-4 py-2 rounded-full">
              <Tag className="h-4 w-4 text-primary" />
              <p className="text-sm">
                Chọn danh mục để lọc các bài viết liên quan
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mt-6">
            {categories.map((category: BlogCategory) => (
              <Card
                key={category.id}
                className={`cursor-pointer transition-all duration-300 overflow-hidden h-full ${
                  activeCategory === category.id 
                    ? "border-2 border-blue-900 shadow-md" 
                    : "border border-gray-200 hover:border-blue-300 hover:shadow"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                  <div className={`rounded-full p-3 mb-3 ${
                    activeCategory === category.id
                      ? "bg-blue-100"
                      : "bg-gray-100"
                  }`}>
                    {category.icon ? (
                      <category.icon className={`w-6 h-6 ${
                        activeCategory === category.id
                          ? "text-primary" 
                          : "text-gray-700"
                      }`} />
                    ) : (
                      <FileText className={`w-6 h-6 ${
                        activeCategory === category.id
                          ? "text-primary" 
                          : "text-gray-700"
                      }`} />
                    )}
                  </div>
                  <h3 className={`font-medium text-sm ${
                    activeCategory === category.id
                      ? "text-primary" 
                      : "text-gray-800"
                  }`}>
                    {category.label}
                  </h3>
                  <Badge 
                    variant="outline" 
                    className={`mt-2 ${
                      activeCategory === category.id
                        ? "bg-blue-600 text-white" 
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {category.id === 'all' 
                      ? recentPosts.length 
                      : recentPosts.filter(post => post.category === category.id).length} bài viết
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
                <FileText className="w-4 h-4 text-primary mr-2" />
                <span className="text-primary text-sm font-medium">
                  {activeCategory === 'all' ? 'Cập nhật mới nhất' : 'Danh mục đã chọn'}
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                {activeCategory === 'all' 
                  ? 'Bài blog gần đây' 
                  : `Bài viết về ${categories.find(cat => cat.id === activeCategory)?.label || ''}`}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                {activeCategory === 'all' 
                  ? 'Những bài viết mới nhất về các chủ đề pháp lý quan trọng và cập nhật thông tin mới nhất từ văn phòng luật sư'
                  : `Tất cả các bài viết liên quan đến chủ đề ${categories.find(cat => cat.id === activeCategory)?.label || ''} được cập nhật thường xuyên từ đội ngũ luật sư của chúng tôi`
                }
              </p>
            </div>
            <div className="flex-shrink-0">
              {activeCategory !== 'all' ? (
                <Button 
                  variant="outline" 
                  onClick={() => setActiveCategory('all')}
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Xem tất cả bài viết
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              ) : (
                <Link href="/blog">
                  <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Tất cả các bài viết
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post: BlogPost, index: number) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden p-0 h-full flex flex-col">
                  <div className="aspect-[3/2] bg-gray-200 relative overflow-hidden">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="p-6 pb-4">
                    <div className="inline-flex items-center px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-primary mb-4 w-fit">
                      <Briefcase className="w-3 h-3 mr-1" />
                      {post.categoryLabel}
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-3 line-clamp-3">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-sm line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-6 pt-0 pb-0">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <User className="w-4 h-4 mr-2 text-primary" />
                      <span>Tác giả: {post.author}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      <span>Thời gian đọc: {post.readTime}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      <span>{post.date}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-4 flex justify-center mt-auto">
                    <Button 
                      variant="default"
                      className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-200 legal-button"
                    >
                      Xem bài viết
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 py-16 text-center">
                <div className="bg-white border border-gray-200 rounded-xl p-10 max-w-lg mx-auto shadow-sm">
                  <div className="rounded-full bg-blue-50 p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <FileText className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Không tìm thấy bài viết</h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    Hiện chưa có bài viết nào trong danh mục{' '}
                    <span className="font-medium text-primary">
                      {categories.find(cat => cat.id === activeCategory)?.label || ''}
                    </span>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button 
                      variant="default" 
                      onClick={() => setActiveCategory('all')}
                      className="bg-blue-600 text-white hover:bg-blue-700"
                    >
                      Xem tất cả bài viết
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-gray-300 text-gray-700 hover:bg-gray-50"
                      onClick={() => {
                        // Find the first category with posts
                        const catWithPosts = categories.find(cat => 
                          cat.id !== 'all' && 
                          cat.id !== activeCategory && 
                          recentPosts.some(post => post.category === cat.id)
                        );
                        if (catWithPosts) setActiveCategory(catWithPosts.id);
                        else setActiveCategory('all');
                      }}
                    >
                      Khám phá danh mục khác
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {filteredPosts.length > 0 && (
            <div className="mt-12 text-center">
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Tải thêm bài viết {filteredPosts.length > 6 ? `(${filteredPosts.length - 6} bài còn lại)` : ''}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-12 lg:py-16" id="appointment">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              {cta.heading.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              {cta.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {cta.buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  className={`inline-flex items-center justify-center px-8 py-4 font-medium rounded-lg transition-all duration-200 legal-button ${
                    button.variant === 'primary' 
                      ? 'bg-black text-primary-foreground hover:bg-gray-800 shadow-lg hover:shadow-xl' 
                      : 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  {button.icon && <button.icon className="w-5 h-5 mr-2" />}
                  {button.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
