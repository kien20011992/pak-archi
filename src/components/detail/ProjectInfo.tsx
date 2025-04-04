'use client';

import React from 'react';

interface ProjectInfoProps {
  title: string;
  info: string;
  description: string;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ title, info, description  }) => {
  return (
    <div className="text-white h-screen flex flex-col">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div className="h-1/3 overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent pr-4">
        
        {/* TODO: info */}
        <div className="text-white text-sm">
          {info.split('\n').map((item, index) => (
            <div className="mb-3" key={index}>
                <p>{item}</p>
            </div>
          ))}

          <br />
          
          <div className="mb-3">
            <p>PAK archi | Design & Build</p>
          </div>
          
          <div className="mb-3">
            <p>• Hotline: 0922813888</p>
          </div>
          
          <div className="mb-3">
            <p>• Văn phòng Hà Nội: 42 Ngõ 8 - Văn Phú - Hà Đông - Hà Nội</p>
          </div>

          <div className="mb-3">
            <p>• Email: thietkepak@gmail.com</p>
          </div>
        </div>
      </div>
      
      <div className="h-2/5 overflow-y-auto scrollbar-thin scrollbar scrollbar-thumb-white scrollbar-track-transparent pr-4 mt-6">
        <div className="prose max-w-none text-[#999999]">
          <p className="text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
