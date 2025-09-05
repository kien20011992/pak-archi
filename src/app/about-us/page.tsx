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
                <b>MQhome</b> là công ty thiết kế kiến trúc chuyên nghiệp, quy tụ đội ngũ kiến trúc sư dày dạn kinh nghiệm, giàu tư duy sáng tạo cùng kỹ thuật thi công chuẩn mực. Chúng tôi mang đến giải pháp thiết kế, thi công tổng thể, đảm bảo tính thẩm mỹ, tối ưu chi phí và đúng tiến độ từ ý tưởng đến công trình hoàn thiện.
            </p>
            <p>
               Với triết lý lấy con người làm trung tâm, <b><u>MQhome</u></b> kiến tạo những không gian sống hài hòa, nơi con người tìm thấy sự thoải mái và cảm xúc tích cực. Thông qua nghiên cứu kỹ lưỡng và phương pháp thiết kế khoa học, chúng tôi tạo ra công trình bền vững, giàu tính thẩm mỹ và chứa đựng dấu ấn riêng cho từng khách hàng
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
