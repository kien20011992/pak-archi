import React from 'react';
import DetailContent from '@/components/detail/DetailContent';
import { getApartmentBySlug, getApartments } from '@/services/apartment';

export async function generateStaticParams() {
  const apartments = await getApartments();
  return apartments.map((apartment) => ({ slug: apartment.slug }));
}

export const revalidate = 3600; // revalidate every hour

interface DetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function DetailPage({ params }: DetailPageProps) {
  try {
    const { slug } = await params;
    if (!slug) {
      return (
        <div className="min-h-screen bg-black/5 flex items-center justify-center">
          <div className="text-2xl font-semibold">ID không hợp lệ</div>
        </div>
      );
    }

    let project;
    try {
      project = await getApartmentBySlug(slug);

      if (!project) {
        return (
          <div className="min-h-screen bg-black/5 flex items-center justify-center">
            <div className="text-2xl font-semibold">Không tìm thấy dự án</div>
          </div>
        );
      }

      return <DetailContent project={project} />;
    } catch (error) {
      console.error('Error fetching project data:', error);
      return (
        <div className="min-h-screen bg-black/5 flex items-center justify-center">
          <div className="text-2xl font-semibold">Có lỗi xảy ra khi tải dữ liệu</div>
        </div>
      );
    }
  } catch (error) {
    console.error('Error processing params:', error);
    return (
      <div className="min-h-screen bg-black/5 flex items-center justify-center">
        <div className="text-2xl font-semibold">Có lỗi xảy ra khi xử lý thông tin</div>
      </div>
    );
  }
}

export default DetailPage;
