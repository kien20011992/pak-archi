'use client';

import MapWithInfoBox from '@/components/map/GoogleMap';

const ContactPage = () => {
  return (
    <div className="site-inner min-h-screen flex items-center">
      <div className="relative w-full">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Contact Form */}
            <div className="md:col-span-5 order-2 md:order-1">
              <form className="space-y-6 p-5">
            <div>
              <h2 className="text-4xl text-white mb-6">Contact</h2>
              <label htmlFor="name" className="block font-medium text-gray-500">Tên của bạn</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border border-white bg-transparent text-white p-3 focus:border-white focus:ring-0"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium text-gray-500">Email của bạn</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border border-white bg-transparent text-white p-3 focus:border-white focus:ring-0"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-lg font-medium text-gray-500">Số điện thoại của bạn</label>
              <input
                type="phone"
                id="phone"
                name="phone"
                className="mt-1 block w-full border border-white bg-transparent text-white p-3 focus:border-white focus:ring-0"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-500">Lời nhắn của bạn</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full border border-white bg-transparent text-white p-3 focus:border-white focus:ring-0"
              ></textarea>
            </div>
            

            <button
              type="submit"
              className="w-full bg-stone-800 border border-white text-white py-3 px-4 hover:bg-white hover:text-black transition-colors text-xl"
            >
              Gửi thông tin cho chúng tôi
            </button>
              </form>
            </div>

            {/* Google Map */}
            <div className="md:col-span-7 order-1 md:order-2 h-[600px] md:h-[800px]">
              <MapWithInfoBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
