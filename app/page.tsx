import Main from "@/components/homepage/Main";

export const metadata = {
  title: "Trang Chủ - Dịch Vụ Pháp Lý Chuyên Nghiệp | Luật Sư Tùng Lâm",
  description:
    "Dịch vụ tư vấn pháp luật chuyên nghiệp, hỗ trợ pháp lý doanh nghiệp, dân sự, hôn nhân gia đình, và bất động sản. Đội ngũ luật sư giàu kinh nghiệm, tận tâm bảo vệ quyền lợi khách hàng. Liên hệ ngay để được tư vấn miễn phí!",
  keywords:
    "luật sư Tùng Lâm, tư vấn pháp luật, dịch vụ pháp lý, luật dân sự, luật doanh nghiệp, luật hôn nhân gia đình, luật bất động sản, tranh tụng, hợp đồng, Việt Nam",
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
    title: "Trang Chủ - Dịch Vụ Pháp Lý Chuyên Nghiệp | Luật Sư Tùng Lâm",
    description:
      "Dịch vụ tư vấn pháp luật chuyên nghiệp, hỗ trợ pháp lý doanh nghiệp, dân sự, hôn nhân gia đình, và bất động sản. Đội ngũ luật sư giàu kinh nghiệm.",
    url: "https://luatsutunglam.com/",
    siteName: "Luật Sư Tùng Lâm",
    type: "website",
    locale: "vi_VN",
    images: [
      {
        url: "https://luatsutunglam.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Logo Luật Sư Tùng Lâm - Dịch vụ pháp lý chuyên nghiệp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trang Chủ - Dịch Vụ Pháp Lý Chuyên Nghiệp | Luật Sư Tùng Lâm",
    description:
      "Dịch vụ tư vấn pháp luật chuyên nghiệp, hỗ trợ pháp lý doanh nghiệp, dân sự, hôn nhân gia đình, và bất động sản.",
    images: ["https://luatsutunglam.com/logo.png"],
    creator: "@luatsutunglam",
  },
  alternates: {
    canonical: "https://luatsutunglam.com/",
  },
  category: "Legal Services",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Trang Chủ - Luật Sư Tùng Lâm",
            description:
              "Dịch vụ tư vấn pháp luật chuyên nghiệp, hỗ trợ pháp lý doanh nghiệp, dân sự, hôn nhân gia đình, và bất động sản.",
            url: "https://luatsutunglam.com/",
            isPartOf: {
              "@type": "WebSite",
              name: "Luật Sư Tùng Lâm",
              url: "https://luatsutunglam.com/",
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Trang Chủ",
                  item: "https://luatsutunglam.com/",
                },
              ],
            },
          }),
        }}
      />
      <hr className="border-t-2 border-gray-500"></hr>
      <Main />
    </>
  );
}
