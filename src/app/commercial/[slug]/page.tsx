import React from 'react';
import DetailContent from '@/components/detail/DetailContent';
import { getCommercialBySlug, getCommercials } from '@/services/commercial';

export async function generateStaticParams() {
  const commercials = await getCommercials();
  return commercials.map((commercial) => ({ slug: commercial.slug }));
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
      project = await getCommercialBySlug(slug);

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
