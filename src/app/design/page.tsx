import HouseCard from '@/components/houses/HouseCard';
import { getDesigns } from '@/services/design';

export const revalidate = 3600; // revalidate every hour

async function getDesignProjects() {
  const designs = await getDesigns();
  return designs.map(design => ({
    title: design.title,
    subtitle: 'Design',
    imageUrl: design.images[0],
    link: `/design/${design.slug}`
  }));
}

export default async function Design() {
  const designProjects = await getDesignProjects();

  if (!designProjects || designProjects.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-white">Trang vẫn đang cập nhật</p>
      </div>
    );
  }
  
  return (
    <div className="page-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {designProjects.map((project, index) => (
        <HouseCard
          key={index}
          title={project.title}
          subtitle={project.subtitle}
          imageUrl={project.imageUrl}
          link={project.link}
        />
      ))}
    </div>
  );
}
