'use client';

import React from 'react';
import ImageGallery from '@/components/detail/ImageGallery';
import ProjectInfo from '@/components/detail/ProjectInfo';

interface Project {
  title: string;
  info: string;
  description: string;
  images: string[];
}

interface DetailContentProps {
  project: Project;
}

const DetailContent: React.FC<DetailContentProps> = ({ project }) => {
  return (
    <div className="min-h-screen bg-black/5">
      <main className="pt-20 md:pt-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <ImageGallery images={project.images} />
            </div>
            <div className="md:w-1/3">
              <ProjectInfo
                title={project.title}
                info={project.info}
                description={project.description}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DetailContent;
