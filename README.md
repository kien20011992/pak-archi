# Temporal Nest

Temporal Nest là một ứng dụng web được xây dựng bằng Next.js, tập trung vào việc hiển thị và quản lý thông tin bất động sản. Dự án sử dụng các công nghệ hiện đại và cung cấp trải nghiệm người dùng mượt mà.

## Công nghệ sử dụng

- **Frontend Framework**: Next.js 15.2.4
- **UI Library**: React 19
- **Styling**: TailwindCSS
- **Database**: Supabase
- **Carousel**: Embla Carousel

## Tính năng chính

- Hiển thị danh sách bất động sản
- Tìm kiếm và lọc bất động sản
- Xem chi tiết bất động sản
- Tích hợp bản đồ Google Maps
- Giao diện responsive
- Hiệu ứng carousel mượt mà

## Cài đặt

1. Clone repository:
```bash
git clone <repository-url>
cd temporal-nest
```

2. Cài đặt dependencies:
```bash
npm install
# hoặc
yarn install
```

3. Tạo file môi trường:
Tạo file `.env.local` và thêm các biến môi trường cần thiết:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

## Phát triển

Chạy server phát triển:

```bash
npm run dev
# hoặc
yarn dev
```

Mở [http://localhost:9000](http://localhost:9000) để xem kết quả.

## Cấu trúc thư mục

```
src/
├── app/                # App router và các trang
├── components/         # React components
├── lib/               # Utilities và configurations
├── services/          # API services
```

## Triển khai

Build ứng dụng cho production:

```bash
npm run build
# hoặc
yarn build
```

Chạy ứng dụng ở môi trường production:

```bash
npm run start
# hoặc
yarn start
```

## Đóng góp

Mọi đóng góp đều được hoan nghênh. Vui lòng tạo issue hoặc pull request để đóng góp.

## Giấy phép

Dự án này được phân phối dưới giấy phép MIT. Xem file `LICENSE` để biết thêm chi tiết.
