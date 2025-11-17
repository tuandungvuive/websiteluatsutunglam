import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Luật Sư Tùng Lâm | Dịch vụ pháp lý chuyên nghiệp",
    template: "%s | Luật Sư Tùng Lâm",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  description:
    "Dịch vụ tư vấn pháp luật chuyên nghiệp, hỗ trợ pháp lý doanh nghiệp, dân sự, hôn nhân gia đình, và bất động sản. Đội ngũ luật sư giàu kinh nghiệm, tận tâm bảo vệ quyền lợi khách hàng.",
  keywords: [
    "luật sư",
    "tư vấn pháp luật",
    "dịch vụ pháp lý",
    "luật dân sự",
    "luật doanh nghiệp",
    "luật hôn nhân gia đình",
    "luật bất động sản",
    "tư vấn pháp lý doanh nghiệp",
    "tranh tụng",
    "hợp đồng",
    "Việt Nam",
    "luật sư Tùng Lâm",
  ],
  authors: [{ name: "Luật Sư Tùng Lâm" }],
  creator: "Luật Sư Tùng Lâm",
  publisher: "Luật Sư Tùng Lâm",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Luật Sư Tùng Lâm | Dịch vụ pháp lý chuyên nghiệp",
    description:
      "Dịch vụ tư vấn pháp luật chuyên nghiệp, hỗ trợ pháp lý doanh nghiệp, dân sự, hôn nhân gia đình, và bất động sản. Đội ngũ luật sư giàu kinh nghiệm, tận tâm bảo vệ quyền lợi khách hàng.",
    url: "https://luatsutunglam.com/",
    siteName: "Luật Sư Tùng Lâm",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Luật Sư Tùng Lâm - Dịch vụ pháp lý chuyên nghiệp",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luật Sư Tùng Lâm | Dịch vụ pháp lý chuyên nghiệp",
    description:
      "Dịch vụ tư vấn pháp luật chuyên nghiệp, hỗ trợ pháp lý doanh nghiệp, dân sự, hôn nhân gia đình, và bất động sản.",
    images: ["/logo.png"],
    creator: "@luatsutunglam",
  },
  alternates: {
    canonical: "https://luatsutunglam.com/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://luatsutunglam.com/"),
  category: "Legal Services",
};

export const viewport = {
  themeColor: "#1e40af",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "Luật Sư Tùng Lâm",
              url: "https://luatsutunglam.com/",
              logo: "https://luatsutunglam.com/logo.png",
              description:
                "Dịch vụ tư vấn pháp luật chuyên nghiệp, hỗ trợ pháp lý doanh nghiệp, dân sự, hôn nhân gia đình, và bất động sản.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+84-xxx-xxx-xxx",
                contactType: "Customer Service",
                availableLanguage: "Vietnamese",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Địa chỉ văn phòng",
                addressLocality: "Thành phố",
                addressRegion: "Tỉnh",
                postalCode: "Mã bưu điện",
                addressCountry: "VN",
              },
              sameAs: [
                "https://facebook.com/luatsutunglam",
                "https://linkedin.com/company/luatsutunglam",
              ],
              areaServed: "VN",
              priceRange: "$$",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Luật Sư Tùng Lâm",
              url: "https://luatsutunglam.com/",
              description:
                "Dịch vụ tư vấn pháp luật chuyên nghiệp với đội ngũ luật sư giàu kinh nghiệm",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://luatsutunglam.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
      <Navbar />
        {children}
      <Footer/>
      <Sidebar />
      </body>
    </html>
  );
}
