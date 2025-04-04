'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Blur Effect */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/COVER_FACEBOOK_2-67035d54d8e98.jpg"
          alt="About Us Background"
          fill
          className="object-cover blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-4">
        <div className="bg-black p-8 md:p-12 max-w-3xl rounded-lg shadow-2xl">
          <h1 className="text-3xl font-bold text-gray-300 mb-6">Chúng Tôi Là...</h1>
          <div className="text-gray-300 text-base space-y-4">
            <p>
                “ PAK ARCHI “ được thành lập vào năm 2019 bởi KTS. NGUYỄN THÀNH PHƯƠNG. Là công ty Thiết Kế và Xây Dựng (Design & Build) chuyên nghiệp hoạt động tại thị trường Việt Nam và Quốc Tế. Đội ngũ thiết kế với những nhân sự trẻ tài năng, nhiệt huyết và sáng tạo, đội ngũ kỹ thuật và thi công dày dặn kinh nghiệm. Chúng tôi không chỉ mang tới những sản phẩm thiết kế và xây dựng tâm huyết, tỉ mỉ. Mà còn mang đến các cho khách hàng một giải pháp mang tính tổng thể. Giúp khách hàng có thể đảm bảo được độ chính xác về thẩm mỹ và thời gian từ khâu thiết kế cho đến thi công hoàn thiện. Khách hàng sẽ tiết kiệm được kinh phí từ các giải pháp thi công thực tế đã được định hình ngay từ những bước thiết kế đầu tiên và tiết kiệm được chi phí quản lí cho dự án.
            </p>
            <p>
                Với triết lí lấy “con người” làm trung tâm và “thiên nhiên” là vỏ bọc mà ở bên trong nó con người được chữa lành và cảm thấy hạnh phúc. Chúng tôi luôn tạo ra những không gian mà ở đó ranh giới giữa con người và thiên nhiên được xóa nhòa, đưa con người về trạng thái thoải mái nhất và có những trải nghiệm đầy ắp những cảm xúc tích cực”. Và bằng những phương pháp nghiên cứu, sáng tác khoa học như ( nghiên cứu trên mô hình tỉ lệ 1/50 , DIAGRAM phân tích bối cảnh của dự án, khí hậu v....v ). Chúng tôi đưa ra những phương án mà ở đó không gian đạt được thẩm mỹ, cải thiện vi khí hậu bên trong và chứa đựng những câu chuyện, thông điệp thú vị trong cuộc sống.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
